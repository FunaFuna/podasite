import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import DesignMain from "./DesignMain";
// import PagesMain from "./PagesMain";
// import BrandingsMain from "./BrandingsMain";
// import BrandningMain from "./BrandingsMain";
// import AdsMain from "./AdsMain";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: "" };
    this.toggle = this.toggle.bind(this);
    this.toggleBack = this.toggleBack.bind(this);

    Dropdown.handleClickOutside = () => {
      this.setState({ menu: false });
    };
  }

  toggle() {
    this.setState({ menu: !this.state.menu });
    // window.addEventListener("click", console.log("clicked"));
    console.log("here");
  }

  toggleBack() {
    this.setState({ menu: false });
  }

  render() {
    const toggle = this.state.menu;
    return (
      <li>
        <a onClick={this.toggle}>
          <img className="menu" src="./img/menu_group.svg" alt="menu" />
        </a>
        <div>
          {this.state.menu ? (
            <ul className="dropdown">
              <a href="advertisements">
                <li>Реклама</li>
              </a>
              <a href="webpages">
                <li>Сайты</li>
              </a>
              <a href="designes">
                <li>Дизайн</li>
              </a>
              <a href="brandings">
                <li>Брендинг</li>
              </a>
            </ul>
          ) : null}
        </div>
      </li>
    );
  }
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
