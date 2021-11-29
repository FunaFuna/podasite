import React, { Component, useState, useEffect } from "react";
class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const img = this.props.img;
    const name = this.props.name;
    const description = this.props.description;
    const tag1 = this.props.tag1;
    const tag2 = this.props.tag2;
  }

  render() {
    const rows = [
      {
        img: "./img/oiler-logo-text.svg",
        name: "Oiler",
        description: "Сеть автосервисов в Киеве",
        tag1: "Adwords реклама",
        tag2: "FB/Inst реклама",
      },
      {
        img: "./img/Sec.svg",
        name: "Охрана и безопасность",
        description: "Охранный холдинг в Харькове и Киеве",
        tag1: "Разработка сайта",
        tag2: "Adwords реклам",
      },
      {
        img: "./img/elcar.svg",
        name: "Elcar",
        description: "Сеть автосервисов в Польше",
        tag1: "Разработка сайта",
        tag2: "Adwords реклама",
      },
      {
        img: "./img/ford.svg",
        name: "Ford",
        description: "Автосалон в Чернигове",
        tag1: "Adwords реклама",
        tag2: "YouTube реклама",
      },
      {
        img: "./img/nissan.svg",
        name: "Nissan",
        description: "Автосалон в Чернигове",
        tag1: "Adwords реклама",
        tag2: "YouTube реклама",
      },
      {
        img: "./img/osnova.svg",
        name: "Основа Буд 7",
        description: "Cтроительная компания",
        tag1: "Разработка сайт",
        tag2: "Adwords реклама",
      },
    ];
    const result = rows.map((card) => (
      <Row
        img={card.img}
        name={card.name}
        description={card.description}
        tag1={card.tag1}
        tag2={card.tag2}
      />
    ));
    return (
      <div class="container">
        <div class="copmanies">
          <a>Компании с которыми мы работаем:</a>
        </div>
        <hr />
        <div className="noCursrorZone">{result}</div>

        <div class="button_container">
          <div class="button_main">
            <a href="#">Ещё проекты</a>
          </div>
        </div>
      </div>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img = this.props.img;
    const name = this.props.name;
    const description = this.props.description;
    const tag1 = this.props.tag1;
    const tag2 = this.props.tag2;

    return (
      <>
        <div class="flex-item">
          <div class="img_container">
            <img src={img} />
          </div>
          <div class="brands-text">
            <a id="company-name">{name}</a>
            <a>{description}</a>
          </div>
          <div class="brands-text">
            <a>{tag1}</a>
            <a id="brands-padd">{tag2}</a>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default Companies;
