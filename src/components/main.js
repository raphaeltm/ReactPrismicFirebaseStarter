import React from "react";
import PropTypes from "prop-types";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.title}</h1>
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Main;