import React from "react";
import {connect} from "react-redux";
import {RichText} from "prismic-reactjs";
import {Link} from "react-router-dom";
import {linkResolver} from "../../common/prismic";

class Nav extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false
    };
  }

  render() {
    if (!this.props.settings) {
      return null;
    }
    const settings = this.props.settings.data;

    return <div>
      <div id="navtrigger" className="is-hidden-tablet" onClick={()=>{this.setState({visible: true})}}>
        menu
      </div>
      <div className={`section ${this.state.visible ? 'visible' : 'hidden'}`} id="navbar">
        <div className="columns">
          <div className="column is-1 has-text-centered-mobile is-hidden-tablet" onClick={()=>{this.setState({visible: false})}}>
            <span className="nav-link">Close &times;</span>
          </div>
          <hr className="is-hidden-tablet"/>
          {settings.logo.url && <div className="column is-1 is-hidden-mobile">
            <img src={settings.logo.url} alt={settings.logo.alt} id="nav-logo"/>
          </div>}
          {settings.navigation.map((nav) => {
            return <div className="column is-1 has-text-centered-mobile" key={nav.link_text}>
              <Link to={linkResolver(nav.navigation_link)}>
                <span className="nav-link">{nav.link_text}</span>
              </Link>
            </div>;
          })}
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.content.settings.content
  };
};

export default connect(mapStateToProps)(Nav);