import React, { Component } from "react";
class MobFooter extends Component {
  render() {
    return (
      <div className="footer-mob">
        <div className="footer-mob-wrapper">
          <div className="footer-mob-header">
            <a className="header-bold">Есть идея?</a>
            <a>Давайте обсудим!</a>
            <hr></hr>
          </div>
          <div className="footer-mob-data">
            <a className="footer-info-data">+38 063 299 51 91</a>
            <a className="footer-info-text">Телефон для консультаций</a>
          </div>
          <div className="footer-mob-data">
            <a className="footer-info-data">poda.marketing@gmail.com</a>
            <a className="footer-info-text">Почта для переписки</a>
          </div>
          <a className="footer-adress">
            14000, Украина, Чернигов ул. Молодчого 44а, офис 28, 2 этаж
          </a>
          <div className="footer-rows">
            <div className="footer-row">
              <a>Telegram</a>
              <a>Facebook</a>
              <a>WhatsApp</a>
            </div>
            <div className="footer-row">
              <a>Viber</a>
              <a>Instagram</a>
              <a>Behance</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobFooter;
