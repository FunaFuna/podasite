import React, {
  Component,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import MediaSlot from "../MediaSlot";
class WebPageMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const cards = [
      {
        img: "./img/firusas-mob.png",
        text: "Firusas fashion store",
        textSmall: "Интернет магазин дизайнероской женской одежды",
        bubbles: [
          "Визуальная идентификация бренда",
          "Интернет магазин",
          "Реклама",
        ],
      },
      {
        img: "./img/ohrana-mob.png",
        text: "Охрана и безопасность",
        textSmall: "Охранное агентство в Киеве и Харькове",
        bubbles: ["Сайт", "Реклама"],
      },
      {
        img: "./img/autokratos-mob.png",
        text: "Автократос",
        textSmall: "Пригон и ремонт авто из США и Канады",
        bubbles: ["Сайт", "Реклама"],
      },
      {
        img: "./img/g-tunning-mob.png",
        text: "G-tuning",
        textSmall: "Тюнинг салон авто",
        bubbles: ["Визуальная идентификация бренда", "Сайт", "Реклама"],
      },
      {
        img: "./img/tirservice-mob.png",
        text: "Tir service",
        textSmall: "Сервис и пригон тягаей",
        bubbles: ["Сайт", "Реклама"],
      },
      {
        img: "./img/fabrika-wody.png",
        text: "Фабрика воды",
        textSmall: "Очистка и доставка воды в Киеве и Чернигове",
        bubbles: ["Сайт", "Реклама"],
      },
    ];
    const cardsDone = cards.map((card) => (
      <MediaSlot
        img={card.img}
        text={card.text}
        textSmall={card.textSmall}
        bubbles={card.bubbles}
      />
    ));
    return <>{cardsDone}</>;
  }
}

export default WebPageMob;
