import React from "react";
import {RichText} from "prismic-reactjs";

class Blog extends React.Component {
  render() {
    if (!this.props.content) {
      return null;
    }
    const page = this.props.content.data;
    return <article>
      <header>
        {page.title && RichText.render(page.title)}
      </header>
      <div>
        {page.content && RichText.render(page.content)}
      </div>
    </article>;
  }
}

export default Blog;