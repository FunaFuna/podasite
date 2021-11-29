import React, { Component } from "react";
import All from "../compoments/brandings/All";
import Banners from "../compoments/designs/Banners";
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
class BrandningMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const text = (
      <a>
        Бренд это не только красивый логотип и шрифт. Это трансляция отношения
        компании к своему клиенту
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
          <PageMainPart
            smallText={"Лендинги, промо-сайты и e-commerce решения"}
            header={"Разрабатываем бренд-стратегию и фирменный стиль"}
            img={" ./img/design_main_img.png"}
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
          <PageMainPart
            quoteText={qTextMob}
            smallText={"Google Adwords, Facebook Ads, E-mail marketing"}
            header={"Разрабатываем бренд-стратегию и фирменный стиль "}
            img={"./img/brandings_main_mob.png"}
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
export default BrandningMain;
