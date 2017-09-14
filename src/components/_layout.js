import React from "react";

class Layout extends React.Component {
  render() {
    return <div {...this.props} className={`section ${this.props.className}`}>
      <div className="container">
        {this.props.children}
      </div>
    </div>;
  }
}

export default Layout;