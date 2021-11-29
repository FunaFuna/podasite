import React, { Component } from "react";
// import { ReactComponent as YourSvg } from "../public/img/dots.svg";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const class_name = this.props.class;
    const text = this.props.text;
    return (
      <div className={class_name}>
        <div className="top">
          <img src="img/dots.svg" />
        </div>
        {text}
        <div className="bottom">
          <img src="img/dots.svg" />
        </div>
      </div>
    );
  }
}

export default Quote;
