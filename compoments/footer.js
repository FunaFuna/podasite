import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="footer-wrapper">
          <div class="footer-mainheader">
            <a class="footer-headertop">Есть идея?</a>
            <a class="footer-headerbottom">Давайте обсудим!</a>
            <hr />
          </div>

          <div class="footer-main">
            <div class="footer-row" style={{ width: "39%" }}>
              <a class="footer-header">Адрес</a>
              <a style={{ width: "70%" }}>
                14000, Украина, Чернигов ул. Молодчого 44а, офис 28,
                <br />2 этаж
              </a>
              <div class="footer-img">
                <img src="../img/googlePartner.png" alt="" srcset="" />
                <img src="../img/facebookPartner.png" alt="" srcset="" />
              </div>
            </div>
            <div class="footer-row">
              <a class="footer-header">Клентам</a>
              <a>Аккаунт отдел: +38 063 299 51 92</a>
              <a>Аккаунт отдел: +38 066 299 51 92</a>
              <a>Info@poda.agency</a>
            </div>
            <div class="footer-row">
              <a class="footer-header">Консультация</a>
              <a>Аккаунт отдел: +38 063 299 51 91</a>
            </div>
          </div>
          <div class="footer-links">
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Telegram</a>
            <a>Viber</a>
            <a>WhatsApp</a>
            <a>Behance</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
