import React from "react";
import Prismic from "prismic-javascript";
import {connect} from "react-redux";
import {contentLoaded} from "../actions/content";
import {getApi} from "../prismic";

const getComponent = (type, index) => {
  if(index){
    try {
      return require(`./${type}-index`).default;
    }
    catch (e) {}
  }
  try {
    return require(`./${type}`).default;
  }
  catch (e) {
    return require('./404').default;
  }
};

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    const params = props.match.params;

    getApi().then(async (api) => {
      let page;

      if(params.uid){
        page = await api.getByUID(params.type, params.uid);
        props.dispatch(contentLoaded(page, params.type, params.uid));
      }
      else {
        let response = await api.query(
          Prismic.Predicates.at('document.type', params.type)
        );
        response.results.map((page) => {
          props.dispatch(contentLoaded(page, page.type, page.uid));
        });
      }
    });
  }

  render() {
    if(!this.props.content){
      return null;
    }

    let Component;

    if(!this.props.match.params.uid){
      Component = getComponent(this.props.match.params.type, true);
    }
    else {
      Component = getComponent(this.props.match.params.type);
    }

    return <Component {...this.props}/>
  }
}

const mapStateToProps = (state, props) => {
  const params = props.match.params;
  if (params.uid) {
    return {
      content: (state.content[params.type] || {})[params.uid]
    }
  }
  else {
    return {
      content: state.content[params.type]
    };
  }
};

export default connect(mapStateToProps)(Wrapper);