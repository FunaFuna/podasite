import React, { Component } from "react";
class ForWork extends Component {
  render() {
    return (
      <div class="for_work">
        <a class="for_work_header">Мы используем для работы:</a>
        <div class="for_work_cont">
          <div className="for_work_column">
            <img src="./img/fb-ads.svg" alt="" />
            <img src="./img/rakuten-affilate.svg" alt="" />
            <img src="./img/amocrm.svg" alt="" />
            <img src="./img/vue.svg" alt="" />
          </div>
          <div className="for_work_column">
            <img src="./img/google-analystic.svg" alt="" />
            <img src="./img/mybestbrand.svg" alt="" />
            <img src="./img/PropellerAds_Logo.svg" alt="" />
            <img src="./img/hotjar.svg" alt="" />
          </div>
          <div className="for_work_column">
            <img src="./img/anal.svg" alt="" />
            <img src="./img/sendpulse.svg" alt="" />
            <img src="./img/rozetka.svg" alt="" />
            <img src="./img/stylius.svg" alt="" />
          </div>
          <div className="for_work_column">
            <img src="./img/mailchimp.svg" alt="" />
            <img src="./img/stylight.svg" alt="" />
            <img src="./img/lyst-market.svg" alt="" />
            <img src="./img/tilda.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ForWork;
