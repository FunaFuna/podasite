import React, { Component } from "react";
class ForWorkMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="forwork-mob">
        <a className="forwork-mob-header">Мы используем для работы:</a>
        <div className="forwork-mob-images">
          <div className="forwork-mob-row">
            <img src="./img/fb-ads.svg" alt="" />
            <img src="./img/google-analystic.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/anal.svg" alt="" />
            <img src="./img/mailchimp.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/rakuten-affilate.svg" alt="" />
            <img src="./img/mybestbrand.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/amocrm.svg" alt="" />
            <img src="./img/PropellerAds_Logo.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/sendpulse.svg" alt="" />
            <img src="./img/rozetka.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/stylight.svg" style={{ width: "30%" }} alt="" />
            <img src="./img/lyst-market.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/vue.svg" alt="" />
            <img src="./img/hotjar.svg" alt="" />
          </div>
          <div className="forwork-mob-row">
            <img src="./img/stylius.svg" alt="" />
            <img src="./img/tilda.svg" style={{ width: "30%" }} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ForWorkMob;
