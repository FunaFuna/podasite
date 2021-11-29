import React, { Component } from "react";
import All from "../compoments/ads/All";
import Other from "../compoments/ads/Other";
import Products from "../compoments/ads/Products";
import Services from "../compoments/ads/Services";

import Running from "../compoments/Running";
import WorkWithUs from "../compoments/WorkWithUs";
import AboutUs from "../compoments/AboutUs";
import Companies from "../compoments/Companies";
import Specs from "../compoments/OurSpecs";
import ForWork from "../compoments/ForWork";
import LinkClicker from "../compoments/LinkClicker";
import Quote from "../compoments/Quote";
import { useMediaQuery } from "react-responsive";
import PageMainPartMob from "../compoments/mobile/PageMainPartMob";
import PageMainPart from "../compoments/PageMainPart";
import AdvertisementsMob from "../compoments/mobile/main/AdvertisementsMob";
import BrandingsMob from "../compoments/mobile/main/BrandingsMob";
import DesignesMob from "../compoments/mobile/main/DesignesMob";
import WebPagesMob from "../compoments/mobile/main/WebPagesMob";
import QuoteMob from "../compoments/mobile/QuoteMob";
import MarqueeMobile from "../compoments/mobile/MarqueeMobile";
import WorkWithUsMob from "../compoments/mobile/WorkWithUsMob";
import CompaniesMob from "../compoments/mobile/CompaniesMob";
import AboutUsMob from "../compoments/mobile/AboutUsMob";
import SpecsMob from "../compoments/mobile/SpecsMob";
import ForWorkMob from "../compoments/mobile/ForWorkMob";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
class AdsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const text = (
      <a>
        Хорошо функционирующая реклама в интернете - основной инструмент продаж
        для современного бизнеса
      </a>
      // TODO поправить лапки
    );
    const qTextMob = (
      <a>
        Сайт - это не просто вкладка в интернете, а полноценный инструмент
        продаж для бизнеса. И от его качества зависит успех
      </a>
      // TODO поправить лапки
    );

    const text2 = (
      <a>
        Формируем правильный образ бренда и предложения в сети, для качества
        коммуникации и увеличения продаж.
      </a>
      // TODO поправить лапки
    );

    return (
      <>
        <Desktop>
          <PageMainPart
            smallText={"Google Adwords, Facebook Ads, E-mail marketing"}
            header={"Приводим клиентов в бизнес с помощью интерент-рекламы"}
            img={" ./img/ads_img.png"}
            quoteText={text}
          />
          <All />
          <Running />
          <WorkWithUs />
          <AboutUs />
          <Companies />
          <Specs title={"Другие наши услуги"} />
          <ForWork />
        </Desktop>
        <Mobile>
          <PageMainPartMob
            quoteText={qTextMob}
            smallText={"Google Adwords, Facebook Ads, E-mail marketing"}
            header={"Приводим клиентов в бизнес с помощью интерент-рекламы "}
            img={"./img/ads_main_mob.png"}
          />
          <SelectorMob />
          <QuoteMob text={text2} />
          <MarqueeMobile />
          <WorkWithUsMob />
          <CompaniesMob />
          <AboutUsMob />
          <SpecsMob />
          <ForWorkMob />
        </Mobile>
      </>
    );
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
class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { linkChosed: "Все" };
    this.showName = this.showName.bind(this);
  }
  showName(e, data) {
    this.setState({ linkChosed: data });
    // (e.target.value);
    console.log(data);
  }
  render() {
    const display = this.state.linkChosed;

    const button = (
      <div className="button_container">
        <a href="#">
          <img src=" ./img/new_button.svg" />
        </a>
      </div>
    );
    const nav_menu = (
      <div>
        <nav className="page_menu">
          <ul className="short-menu">
            <li onClick={(e) => this.showName(e, "Все")}>
              <LinkClicker name={"Все"} isClicked={this.state.linkChosed} />
            </li>
            <li onClick={(e) => this.showName(e, "Услуги")}>
              <LinkClicker name={"Услуги"} isClicked={this.state.linkChosed} />
            </li>
            <li onClick={(e) => this.showName(e, "Товары")}>
              <LinkClicker name={"Товары"} isClicked={this.state.linkChosed} />
            </li>
            <li onClick={(e) => this.showName(e, "Другое")}>
              <LinkClicker name={"Другое"} isClicked={this.state.linkChosed} />
            </li>
          </ul>
        </nav>
      </div>
    );
    switch (display) {
      case "Все":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<All />}</div>
            <div>{button}</div>
          </div>
        );
      case "Услуги":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Services />}</div>
            <div>{button}</div>
          </div>
        );
      case "Товары":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Products />}</div>
            <div>{button}</div>
          </div>
        );
      case "Другое":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Other />}</div>
            <div>{button}</div>
          </div>
        );
    }

    return (
      <div>
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
  }
}

export default AdsMain;
