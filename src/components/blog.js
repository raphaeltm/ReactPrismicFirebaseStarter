import React from "react";
import {RichText} from "prismic-reactjs";
import Layout from "./_layout";

class Blog extends React.Component {
  render() {
    const page = this.props.content.data;
    return <Layout>
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
    </Layout>;
  }
}

export default Blog;