import React from "react";
import Homepage from "./homepage";
import Prismic from "prismic-javascript";
import {connect} from "react-redux";
import {contentLoaded} from "../actions/content";
import {getApi} from "../prismic";

const getComponent = (type) => {
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
      }
      else {
        let response = await api.query(
          Prismic.Predicates.at('document.type', params.type)
        );
        page = response.results[0];
      }

      props.dispatch(contentLoaded(page, params.type, params.uid));
    });
  }

  render() {
    let Component = getComponent(this.props.match.params.type);
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