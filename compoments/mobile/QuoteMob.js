import React, { Component } from "react";
// import { ReactComponent as YourSvg } from "../public/img/dots.svg";

class QuoteMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const text = this.props.text;
    return (
      <div className="quote-mob">
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

export default QuoteMob;
