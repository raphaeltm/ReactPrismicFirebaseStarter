import React from "react";
import Prismic from "prismic-javascript";
import {connect} from "react-redux";
import {contentFetching, contentLoaded} from "../actions/content";
import {getApi} from "../../common/prismic";
import _404 from "./404";
import Layout from "./_layout";

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
  componentWillMount(){
    let props = this.props;

    const params = props.match.params;

    props.dispatch(contentFetching());

    getApi().then(async (api) => {
      let page;

      if(params.uid){
        page = await api.getByUID(params.type, params.uid);
        props.dispatch(contentLoaded(page, params.type, params.uid));
      }
      else {
        let response = await api.query(
          Prismic.Predicates.at('document.type', params.type),
          {pageSize: 100}
        );
        if(response.results.length === 0){
          props.dispatch(contentLoaded(null, params.type, null));
        }
        response.results.map((page) => {
          props.dispatch(contentLoaded(page, page.type, page.uid));
        });
      }
    });
  }

  render() {
    if(this.props.fetching === true && !this.props.content){
      return <Layout className="has-text-centered"><h2>Loading...</h2></Layout>;
    }

    if(!this.props.content){
      return <_404 />;
    }

    let Component;

    if(!this.props.match.params.uid){
      Component = getComponent(this.props.match.params.type, true);
    }
    else {
      Component = getComponent(this.props.match.params.type);
    }

    if(!this.props.content.id){
      const content = Object.keys(this.props.content).map((key) => {
        return this.props.content[key];
      });

      const props = {...this.props, content: content};

      return <Component {...props} />
    }
    else {
      return <Component {...this.props} />
    }
  }
}

const mapStateToProps = (state, props) => {
  const params = props.match.params;
  if (params.uid) {
    return {
      content: (state.content[params.type] || {})[params.uid],
      fetching: state.content._fetching,
    }
  }
  else {
    return {
      content: state.content[params.type],
      fetching: state.content._fetching,
    };
  }
};

export default connect(mapStateToProps)(Wrapper);