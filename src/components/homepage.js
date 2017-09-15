import React from "react";
import {RichText} from "prismic-reactjs";
import Layout from "./_layout";

class Homepage extends React.Component {
  render() {
    let page = this.props.content.data;
    return <Layout className="section" id="home">
        <div className="columns">
          <article className="column is-two-thirds">
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
    </Layout>;
  }
}

export default Homepage;