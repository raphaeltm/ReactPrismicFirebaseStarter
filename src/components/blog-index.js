import React from "react";
import {RichText} from "prismic-reactjs";
import {Link} from "react-router-dom";
import {linkResolver} from "../prismic";

class BlogIndex extends React.Component {
  render() {
    return <div>
      {this.props.content.map((content) => {
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