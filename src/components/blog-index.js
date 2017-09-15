import React from "react";
import {RichText} from "prismic-reactjs";
import {Link} from "react-router-dom";
import {linkResolver} from "../prismic";
import Layout from "./_layout";

class BlogIndex extends React.Component {
  render() {
    return <Layout>
      <div className="columns">
        <div className="column is-two-thirds is-offset-2">
          <h1 className="has-text-centered">Blog</h1>
          <hr/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-thirds is-offset-2">
          {this.props.content.map((content) => {
            const page = content.data;
            return <article key={content.id}>
              <header>
                <Link to={linkResolver(content)}>
                  {page.title && <h3>{RichText.asText(page.title)}</h3>}
                </Link>
              </header>
              <div>
                {page.content && `${RichText.asText(page.content).slice(0, 10)}...`}
              </div>
            </article>
          })}
        </div>
      </div>
    </Layout>;
  }
}

export default BlogIndex;