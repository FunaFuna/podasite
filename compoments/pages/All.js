import React, { Component } from "react";
import DoubleCard from "../DoubleCard";
import SingleCard from "../SingleCard";

class All extends Component {
  render() {
    const single_cards = [
      {
        imgPath: "/img/safe.png",
        main_text: "Охрана и безопасность",
        second_text: "",
        tags_before: ["Визуальная идентификация бренда", "Сайт", "Реклама"],
      },
      {
        imgPath: "/img/NAILSART.png",
        main_text: "NAILS ART",
        second_text: "",
        tags_before: ["Визуальная идентификация бренда", "Сайт", "Реклама"],
      },
    ];

    const double_cards = [
      [
        {
          imgPath: "/img/osnovabud.png",
          main_text: "Основа Буд-7",
          second_text: "",
          tags_before: ["Сайт", "Реклама"],
        },
        {
          imgPath: "/img/autokratos.png",
          main_text: "Autokratos",
          second_text: "",
          tags_before: ["Сайт", "Реклама"],
        },
      ],
      [
        {
          imgPath: "/img/kachka.png",
          main_text: "Качка",
          second_text: "",
          tags_before: ["Сайт", "Реклама"],
        },
        {
          imgPath: "/img/tirservicelaptop.png",
          main_text: "TIR SERVICE",
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

export default All;
