import React from "react";
import PropTypes from "prop-types";
import {getApi, linkResolver} from "../prismic";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {page: {}};

    getApi().then(async (api) => {
      let response = await api.query(
        Prismic.Predicates.at('document.type', 'homepage')
      );
      let page = response.results[0];

      this.setState({ page: page.data })
    });
  }

  render() {
    let page = this.state.page;
    return <div>
      <span dangerouslySetInnerHTML={{__html: (page.title && PrismicDOM.RichText.asHtml(page.title))}}/>
      <div dangerouslySetInnerHTML={{__html: (page.body && PrismicDOM.RichText.asHtml(page.body))}}/>
    </div>
  }
}

Main.propTypes = {};

export default Main;