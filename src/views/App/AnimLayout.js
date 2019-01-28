// common components
import React from "react";
import Fade from "react-reveal/Fade";

export default class AnimLayout extends React.Component {
  render() {
    return <Fade>{this.props.children}</Fade>;
  }
}
