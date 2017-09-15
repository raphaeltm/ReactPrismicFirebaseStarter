import React from "react";
import {connect} from "react-redux";
import {RichText} from "prismic-reactjs";
import Nav from "./_nav";

class Layout extends React.Component {
  render() {
    const settings = this.props.settings.data || {};
    return <div>
      <Nav />
      <div className={`section ${this.props.className}`}>
        <div className="container">
          {this.props.children}

          <footer className="columns">
            <div className="column is-half is-offset-one-quarter">
              <hr/>
              <div className="has-text-centered">
                {settings.footer_content && RichText.render(settings.footer_content)}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.content.settings || {}
  };
};

export default connect(mapStateToProps)(Layout);