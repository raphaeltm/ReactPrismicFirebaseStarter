import React from "react";
import {RichText} from "prismic-reactjs";

class Homepage extends React.Component {
  render() {
    let page = this.props.content.data;
    return <div className="section" id="home">
      <div className="container">
        <div className="columns">
          <article className="column">
            <header>
              {page.title && RichText.render(page.title)}
            </header>
            <hr/>
            <div>
              {page.content && RichText.render(page.content)}
            </div>
          </article>
          <aside className="column">
            <header>
              {page.aside_title && RichText.render(page.aside_title)}
            </header>
            <hr/>
            {page.aside_content && RichText.render(page.aside_content)}
          </aside>
        </div>
        <hr/>
        <footer className="has-text-centered">
          {page.footer && RichText.render(page.footer)}
        </footer>
      </div>
    </div>;
  }
}

export default Homepage;