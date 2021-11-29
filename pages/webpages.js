import React, { Component } from "react";

import All from "../compoments/pages/All";
import Corporate from "../compoments/pages/Corporate";
import Landings from "../compoments/pages/Landings";
import Promo from "../compoments/pages/Promo";
import Shops from "../compoments/pages/Shops";

import Running from "../compoments/Running";
import WorkWithUs from "../compoments/WorkWithUs";
import AboutUs from "../compoments/AboutUs";
import Companies from "../compoments/Companies";
import Specs from "../compoments/OurSpecs";
import ForWork from "../compoments/ForWork";
import LinkClicker from "../compoments/LinkClicker";
import Quote from "../compoments/Quote";
import { useMediaQuery } from "react-responsive";
import PageMainPart from "../compoments/mobile/PageMainPartMob";
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
class WebPagesMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const text = (
      <a>
        Сайт - это не просто вкладка в <br />
        интернете, а полноценный <br />
        инструмент продаж для бизнеса. <br />И от его качества зависит успех
        <br />
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
    const qTextMob = (
      <a>
        Сайт - это не просто вкладка в интернете, а полноценный инструмент
        продаж для бизнеса. И от его качества зависит успех
      </a>
      // TODO поправить лапки
    );

    return (
      <>
        <Desktop>
          <div className="ads">
            <div className="header">
              <p className="small">
                Лендинги, промо-сайты и e-commerce решения
              </p>
              <p className="medium">
                Делаем удобные сайты,
                <br /> повышающие прибыль
              </p>
              <a href="#" className="button">
                Смотреть проекты
              </a>
            </div>
            <div className="img">
              <img src=" ./img/PagesImg2.png" />
            </div>
            <div className="quote">
              <Quote class={"middle_quote"} text={text} />
            </div>
            <div className="projects">
              <a className="header"></a>
              <div className="selector">
                <a className="our_projects">Крайние проекты</a>
                {<Selector />}
              </div>
              <div className="content">
                <div className="quote">
                  <Quote class="second_middle_quote" text={text2} />
                </div>
                <Running />

                <WorkWithUs />
                <Companies />

                <AboutUs />
                <Specs title={"Другие наши услуги"} />
                <ForWork />
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <PageMainPart
            quoteText={qTextMob}
            smallText={"Лендинги, промо-сайты и e-commerce решения"}
            header={"Делаем удобные сайты повышающие прибыль "}
            img={"./img/web_pages_main_mob.png"}
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
          <ul>
            <div className="top">
              <li onClick={(e) => this.showName(e, "Все")}>
                <LinkClicker name={"Все"} isClicked={this.state.linkChosed} />
              </li>
              <li onClick={(e) => this.showName(e, "Лендинги")}>
                <LinkClicker
                  name={"Лендинги"}
                  isClicked={this.state.linkChosed}
                />
              </li>
              <li onClick={(e) => this.showName(e, "Корпоративные сайты")}>
                <LinkClicker
                  name={"Корпоративные сайты"}
                  isClicked={this.state.linkChosed}
                />
              </li>
            </div>

            <div className="bottom">
              <li onClick={(e) => this.showName(e, "Интернет-магазины")}>
                <LinkClicker
                  name={"Интернет-магазины"}
                  isClicked={this.state.linkChosed}
                />
              </li>

              <li onClick={(e) => this.showName(e, "Промо-сайты")}>
                <LinkClicker
                  name={"Промо-сайты"}
                  isClicked={this.state.linkChosed}
                />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
    switch (display) {
      case "Все":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            {/* <div>{<All />}</div> */}
            <div>{<All />}</div>
            <div>{button}</div>
          </div>
        );
      case "Лендинги":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Landings />}</div>
            <div>{button}</div>
          </div>
        );
      case "Корпоративные сайты":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Corporate />}</div>
            <div>{button}</div>
          </div>
        );
      case "Интернет-магазины":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Shops />}</div>
            <div>{button}</div>
          </div>
        );
      case "Промо-сайты":
        return (
          <div className="switch_menu">
            <div>{nav_menu}</div>
            <div>{<Promo />}</div>
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

export default WebPagesMain;
