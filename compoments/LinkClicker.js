import React, { Component } from "react";
class LinkClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const name = this.props.name;
    const isClicked = this.props.isClicked;

    if (isClicked == name) {
      return <a className={"checked"}>{name}</a>;
    } else {
      return <a>{name}</a>;
    }
  }
}

export default LinkClicker;
