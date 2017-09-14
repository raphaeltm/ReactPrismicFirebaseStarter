import React from "react";
import {RichText} from "prismic-reactjs";

class Blog extends React.Component {
  render() {
    const page = this.props.content.data;
    return <div className="section" id="home">
      <div className="container">
        <div className="columns">
          <article className="column is-half">
            <header>
              {page.title && RichText.render(page.title)}
            </header>
            <hr/>
            <div>
              {page.content && RichText.render(page.content)}
            </div>
          </article>
        </div>
      </div>
    </div>;
  }
}

export default Blog;