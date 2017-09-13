import React from "react";
import {getApi} from "../prismic";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import {connect} from "react-redux";

class Homepage extends React.Component {
  render() {
    let content = this.props.content;
    if(!content){
      return null;
    }
    let page = content.data;
    return <div>
      <span dangerouslySetInnerHTML={{__html: (page.title && PrismicDOM.RichText.asHtml(page.title))}}/>
      <div dangerouslySetInnerHTML={{__html: (page.body && PrismicDOM.RichText.asHtml(page.body))}}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content['homepage']
  };
};

export default connect(mapStateToProps)(Homepage);