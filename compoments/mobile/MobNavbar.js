import React, {
  Component,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
// import SideMenu from "./desktopMenu";
import onClickOutside from "react-onclickoutside";

class MobNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true, scrolled: 0, sender: "" };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
      <>
        <div className="navbar-mob">
          <a href={"/"}>
            <img className="logo-mob" src="../img/main_logo.svg"></img>
          </a>
          <img onClick={this.toggleMenu} src="../img/menuMob.svg"></img>
        </div>
        {this.state.visible ? (
          <div className="mobile-float-phone">
            <img src="../img/call_float.svg"></img>
          </div>
        ) : (
          ""
        )}

        <div
          className={
            this.state.visible ? "sideMenuMob show" : "sideMenuMob hide"
          }
        >
          <div className="sideMenuMob-wrapper">
            <div className="navbar-mob">
              <a onclick={this.toggleMenu} href={"/"}>
                <img className="logo-mob" src="../img/main_logo.svg"></img>
              </a>
              <img
                onClick={this.toggleMenu}
                src="../img/menumob-white.svg"
              ></img>
            </div>
            <div className="sideMenuMob-columns">
              <div className="sideMenuMob-header">
                <a>menu</a>
              </div>
              <div className="sideMenuMob-content">
                <a>Главная</a>
                <a>Услуги</a>
                <a>Работы</a>
                <a>Клиенты</a>
                <a>Агентство</a>
                <a>Контакты</a>
              </div>
            </div>
            <div className="sideMenuMob-contacts">
              <a>+38 063 299 51 91</a>
              <a className="sideMenuMob-phone">telephone</a>
            </div>
          </div>
        </div>
        {this.state.scrolled >= 100 ? (
          <div
            onClick={this.toggleMenu}
            id="scroll_menu"
            className="menuFollow"
          >
            <img src="./img/menu_folow.svg" />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default MobNavBar;
