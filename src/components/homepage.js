import React from "react";
import {RichText} from "prismic-reactjs";

class Homepage extends React.Component {
  render() {
    let page = this.props.content.data;
    return <article>
      <header>
        {page.title && RichText.render(page.title)}
      </header>
    </article>
  }
}

export default Homepage;