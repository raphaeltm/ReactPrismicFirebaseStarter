import React from "react";
import {RichText} from "prismic-reactjs";
import {Link} from "react-router-dom";
import {linkResolver} from "../prismic";

class BlogIndex extends React.Component {
  render() {
    const pages = Object.keys(this.props.content).map((key) => {
      return this.props.content[key];
    });
    pages.sort((pageA, pageB) => {
      return pageA.first_publication_date < pageB.first_publication_date ? 0 : 1;
    });
    return <div>
      {pages.map((content) => {
        const page = content.data;
        return <article key={content.id}>
          <header>
            <Link to={linkResolver(content)}>
              {page.title && RichText.render(page.title)}
            </Link>
          </header>
          <div>
            {page.content && `${RichText.asText(page.content).slice(0, 10)}...`}
          </div>
          <hr/>
        </article>
      })}
    </div>;
  }
}

export default BlogIndex;