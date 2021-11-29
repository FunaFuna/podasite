import React, { Component } from "react";
import DoubleCard from "../DoubleCard";
import SingleCard from "../SingleCard";

class Brandings extends Component {
  render() {
    const single_cards = [
      {
        imgPath: "/img/card1.png",
        main_text: "Firusas fashion store",
        second_text: "Интернет магазин дизайнероской женской одежды",
        tags_before: [
          "Визуальная идентификация бренда",
          "Интернет магазин",
          "Реклама",
        ],
      },
      {
        imgPath: "/img/garage.svg",
        main_text: "G-tuning",
        second_text: "Тюнинг салон авто",
        tags_before: ["Визуальная идентификация бренда", "Сайт", "Реклама"],
      },
    ];

    const double_cards = [
      [
        {
          imgPath: "/img/main_2.svg",
          main_text: "Охрана и безопасность",
          second_text: "Охранное агентство в Киеве и Харьков",
          tags_before: ["Сайт", "Реклама"],
        },
        {
          imgPath: "/img/autokratos2.png",
          main_text: "Автократос",
          second_text: "Пригон и ремонт авто из США и Канады",
          tags_before: ["Сайт", "Реклама"],
        },
      ],
      [
        {
          imgPath: "/img/volvo-track.svg",
          main_text: "Tir service",
          second_text: "Сервис и пригон тягаей",
          tags_before: ["Сайт", "Реклама"],
        },
        {
          imgPath: "/img/halfday-cbd.svg",
          main_text: "Halfday CBD",
          second_text: "Легальные продукты с марихуаной (CBD)",
          tags_before: ["Сайт", "Реклама"],
        },
      ],
    ];

    const x = single_cards.map((card) => (
      <SingleCard
        imgPath={card.imgPath}
        main_text={card.main_text}
        second_text={card.second_text}
        tags_before={card.tags_before}
      />
    ));

    const y = double_cards.map((card) => <DoubleCard input={card} />);

    const cards_toghether = [...x, ...y].reduce(
      (l, c, i) => (
        i < x.length && l.push(x[i]), i < y.length && l.push(y[i]), l
      ),
      []
    );

    return (
      <div className="brandings_container">
        <div>{cards_toghether}</div>;<div>{/* <DoubleCard /> */}</div>;
      </div>
    );
  }
}

export default Brandings;
