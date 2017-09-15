import React from "react";
import {RichText} from "prismic-reactjs";
import Layout from "./_layout";

class Blog extends React.Component {
  render() {
    const page = this.props.content.data;
    return <Layout>
      <div className="columns">
        <article className="column is-two-thirds is-offset-2">
          <header className={`has-text-centered ${page.featured_image.url ? 'has-featured-image' : ''}`}>
            {page.featured_image.url && <div className="featured-image" style={{
              backgroundImage: `url("${page.featured_image.url}")`
            }}/>}
            <div className="title-holder">
              {page.title && RichText.render(page.title)}
            </div>
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