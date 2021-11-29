import React, {
  Component,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import Image from "next/image";
// import SideMenu from "./desktopMenu";
import onClickOutside from "react-onclickoutside";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, scrolled: 0, sender: "" };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    Header.handleClickOutside = () => {
      this.setState({ visible: false });
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let scrollTop = window.pageYOffset;

    this.setState({
      scrolled: scrollTop,
    });
  }

  toggleMenu(e) {
    console.log(e.target.id);
    this.setState({
      visible: !this.state.visible,
      sender: e.target.id,
    });
  }
  render() {
    return (
      <div>
        <header>
          <a href="/">
            <img class="logo" src="../img/main_logo.svg" alt="logo" />
          </a>
          <a href="/brief" className="brief">
            Заполнить бриф
          </a>
          <nav>
            <ul className="nav_buttons">
              <li>
                <a href="tel:+380632995191">
                  <img className="call" src="../img/phone.svg" alt="call" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="toggle"
                    src="../img/toggle2.png"
                    alt="toggle"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="lang"
                    src="../img/language.svg"
                    alt="language"
                  />
                </a>
              </li>
              <a onClick={this.toggleMenu}>
                <img
                  className="menu"
                  src="../img/menu_group.svg"
                  id="top_menu"
                  alt="menu"
                />
              </a>
            </ul>
          </nav>
        </header>
        <div className={this.state.visible ? "sideMenu show" : "sideMenu hide"}>
          <div className="sideMenuWrapper">
            <div className="header-part">
              <div>
                <ul>
                  <li>
                    <img src="../img/phone-call-white.svg"></img>
                  </li>
                  <li>
                    <a>+38 063 299 51 91</a>
                  </li>
                  <li>
                    <img src="../img/color-theme-white.svg"></img>
                  </li>
                  <li>
                    <img src="../img/language-white.svg"></img>
                  </li>
                  <li>
                    {this.state.sender != "top_menu" ? (
                      <img
                        onClick={this.toggleMenu}
                        id="close_menu"
                        src="../img/closeMenuFollow.svg"
                      ></img>
                    ) : (
                      <img
                        onClick={this.toggleMenu}
                        id="close_menu"
                        src="../img/closeMenu.svg"
                      ></img>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="links-container">
              <div className="links-row" id="left">
                <a className="links-row-header">Контакты</a>
                <div className="smallMenu">
                  <a>Facebook</a>
                  <a>Instagram</a>
                  <a>Telegram</a>
                  <a>Viber</a>
                  <a>WhatsApp</a>
                  <a>Behance</a>
                  <a>+38 063 299 51 91</a>
                  <a>+38 067 210 65 19</a>
                </div>
              </div>
              <div className="links-row">
                <a className="links-row-header">Меню</a>
                <div className="menu">
                  <a>Главная</a>
                  <a>Услуги</a>
                  <a>Работы</a>
                  <a>Клиенты</a>
                  <a>Агентство</a>
                  <a>Контакты</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.scrolled >= 100 ? (
          <div
            onClick={this.toggleMenu}
            id="scroll_menu"
            className="menuFollow"
          >
            <img src="../img/menu_folow.svg" />
          </div>
        ) : (
          ""
        )}
        <div className="callFloat">
          {this.state.visible ? (
            <img src="../img/call_float_white.svg" />
          ) : (
            <img src="../img/call_float.svg" />
          )}
        </div>
      </div>
    );
  }
}

const clickOutsideConfig = {
  handleClickOutside: () => Header.handleClickOutside,
};

export default onClickOutside(Header, clickOutsideConfig);
