import React from "react";

import VideoLink from "../compoments/VideoLink";
import Quote from "../compoments/Quote";
import Running from "../compoments/Running";
import Companies from "../compoments/Companies";
import Specs from "../compoments/OurSpecs";
import ForWork from "../compoments/ForWork";
import LinkClicker from "../compoments/LinkClicker";
import AboutUs from "../compoments/AboutUs";

import Pages from "../compoments/main/Pages";
import Brandings from "../compoments/main/Brandings";
import Designs from "../compoments/main/Designs";
import Ads from "../compoments/main/Ads";
import { useMediaQuery } from "react-responsive";
import QuoteMob from "../compoments/mobile/QuoteMob";

import WebPagesMob from "../compoments/mobile/main/WebPagesMob";
import DesignesMob from "../compoments/mobile/main/DesignesMob";
import AdvertisementsMob from "../compoments/mobile/main/AdvertisementsMob";
import BrandingsMob from "../compoments/mobile/main/BrandingsMob";
import MarqueeMobile from "../compoments/mobile/MarqueeMobile";
import CompaniesMob from "../compoments/mobile/CompaniesMob";
import AboutUsMob from "../compoments/mobile/AboutUsMob";
import SpecsMob from "../compoments/mobile/SpecsMob";
import WorkWithUsMob from "../compoments/mobile/WorkWithUsMob";
import ForWorkMob from "../compoments/mobile/ForWorkMob";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 800 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { path: "yes" };
  }

  render() {
    const display = this.state.linkChosed;
    const text2 = (
      <a>
        PODA - брендинг и диджитал решения для компаний, готовых к переменам
        сегодня, чтобы уверено расти завтра
      </a>
    );
    const text3 = (
      <a>
        Для нас нет чужих проектов, каждый проект для нас - это новая
        возможность проявить себя
      </a>
    );

    const textMob = (
      <a>
        {" "}
        PODA - брендинг и диджитал решения для компаний, готовых к переменам
        сегодня, чтобы уверено расти завтра
      </a>
    );
    const textMob1 = (
      <a>
        Для нас нет чужих проектов, каждый проект для нас - это новая
        возможность проявить себя
      </a>
    );
    const textMob2 = (
      <a>
        Формируем правильный образ бренда и предложения в сети, для качества
        коммуникации и увеличения продаж.
      </a>
    );
    const button = (
      <div className="button_container">
        <a href="#">
          <img src=" ./img/new_button.svg" />
        </a>
      </div>
    );

    return (
      <div>
        <Desktop>
          <VideoLink />
          <Selector />
          <Quote class="second_middle_quote" text={text2} />
          <Running />
          <Quote class="second_middle_quote" text={text3} />
          <Companies />
          <AboutUs />
          <Specs />
          <ForWork />
        </Desktop>

        <Mobile>
          <div className="index-mob-middle">
            <div className="index-image-wrapper">
              <img src="./img/mobile-middle-video.png"></img>
            </div>
            <div className="index-links-wrapper">
              <a className="index-links-header">Мы можем помочь:</a>
              <div className="index-links">
                <a href="#">Сайты</a>
                <a href="#">Реклама</a>
                <a href="#">Дизайн</a>
                <a href="#">Брендинг</a>
              </div>
            </div>
          </div>
          <div className="index-mob-wrapper">
            <QuoteMob text={textMob} />
            <SelectorMob />
            <QuoteMob text={textMob1} />
            <MarqueeMobile />
            <QuoteMob text={textMob2} />
            <CompaniesMob />
            <AboutUsMob />
            <SpecsMob />
            <ForWorkMob />
          </div>
        </Mobile>
      </div>
    );
  }
}

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { linkChosed: "Брендинг" };
    this.showName = this.showName.bind(this);
  }
  showName(e, data) {
    this.setState({ linkChosed: data });
    // (e.target.value);
    console.log(data);
  }
  render() {
    const text = (
      <a>
        PODA - создаем уникальные решения, для "неуникальных" задач. Брендинг и
        диджитал, помогающий бизнесу найти своих идеальных клиентов
      </a>
      // TODO поправить лапки
    );

    const display = this.state.linkChosed;

    const button = (
      <div class="button_container">
        <div class="button_main">
          <a href="#">Ещё проекты</a>
        </div>
      </div>
    );
    const nav_menu = (
      <div>
        <Quote class="middle_quote" text={text} />
        <a className="our_projects">Наши проекты</a>
        <nav className="page_menu">
          <ul className="short-menu">
            <li onClick={(e) => this.showName(e, "Сайты")}>
              <LinkClicker name={"Сайты"} isClicked={this.state.linkChosed} />
            </li>
            <li onClick={(e) => this.showName(e, "Реклама")}>
              <LinkClicker name={"Реклама"} isClicked={this.state.linkChosed} />
            </li>
            <li onClick={(e) => this.showName(e, "Дизайн")}>
              <LinkClicker name={"Дизайн"} isClicked={this.state.linkChosed} />
            </li>
            <li onClick={(e) => this.showName(e, "Брендинг")}>
              <LinkClicker
                name={"Брендинг"}
                isClicked={this.state.linkChosed}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
    switch (display) {
      case "Сайты":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Pages />}</div>
            <div>{button}</div>
          </div>
        );
      case "Реклама":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Ads />}</div>
            <div>{button}</div>
          </div>
        );
      case "Дизайн":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Designs />}</div>
            <div>{button}</div>
          </div>
        );
      case "Брендинг":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Brandings />}</div>
            <div>{button}</div>
          </div>
        );
    }
  }
}

class SelectorMob extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayed: "webpages" };
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.setState({ displayed: e.target.id });
  }

  render() {
    const displayed = this.state.displayed;
    const navMenuMob = (
      <div className="nav-menu-mob">
        <a>Наши проекты</a>
        <div className="nav-menu-links">
          <a
            className={displayed == "webpages" ? "clicked" : ""}
            onClick={this.clicked}
            id="webpages"
          >
            Сайты
          </a>
          <a
            className={displayed == "advertisements" ? "clicked" : ""}
            onClick={this.clicked}
            id="advertisements"
          >
            Реклама
          </a>
          <a
            className={displayed == "designes" ? "clicked" : ""}
            onClick={this.clicked}
            id="designes"
          >
            Дизайн
          </a>
          <a
            className={displayed == "brandings" ? "clicked" : ""}
            onClick={this.clicked}
            id="brandings"
          >
            Брендинг
          </a>
        </div>
      </div>
    );

    const buttonMob = (
      <div className="button-mob-selector">
        <div className="button-mob-selector-wrapper">
          <a>Ещё</a>
        </div>
      </div>
    );

    const display = this.state.displayed;
    switch (display) {
      case "webpages":
        return (
          <div>
            <div>{navMenuMob}</div>
            <div>
              <WebPagesMob />
            </div>
            <div>{buttonMob}</div>
          </div>
        );
      case "designes":
        return (
          <div>
            <div>{navMenuMob}</div>
            <div>
              <DesignesMob />
            </div>
            <div>{buttonMob}</div>
          </div>
        );
      case "brandings":
        return (
          <div>
            <div>{navMenuMob}</div>
            <div>
              <BrandingsMob />
            </div>
            <div>{buttonMob}</div>
          </div>
        );
      case "advertisements":
        return (
          <div>
            <div>{navMenuMob}</div>
            <div>
              <AdvertisementsMob />
            </div>
            <div>{buttonMob}</div>
          </div>
        );
    }
    return <div></div>;
  }
}

export default Main;
