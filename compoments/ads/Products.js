import React, { Component } from "react";
import DoubleCard from "../DoubleCard";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const button = (
      <div className="button_container">
        <a href="#">
          <img src=" ./img/new_button.svg" />
        </a>
      </div>
    );

    const triple_cards = [
      [
        {
          imgPath: "/img/main_2.svg",
          main_text: "Охрана и безопасность",
          second_text: "Охранное агентство в Киеве и Харьков",
          tags_before: [
            "427 заявок",
            "3,47 $ стоимость заявки",
            "60 дней длительность работы",
          ],
        },
        {
          imgPath: "/img/b1.svg",
          main_text: "Автократос",
          second_text: "Пригон и ремонт авто из США и Канады",
          tags_before: [
            "427 заявок",
            "3,47 $ стоимость заявки",
            "60 дней длительность работы",
          ],
        },
      ],
      [
        {
          imgPath: "/img/main_2.svg",
          main_text: "Охрана и безопасность",
          second_text: "Охранное агентство в Киеве и Харьков",
          tags_before: [
            "427 заявок",
            "3,47 $ стоимость заявки",
            "60 дней длительность работы",
          ],
        },
        {
          imgPath: "/img/b1.svg",
          main_text: "Автократос",
          second_text: "Пригон и ремонт авто из США и Канады",
          tags_before: [
            "427 заявок",
            "3,47 $ стоимость заявки",
            "60 дней длительность работы",
          ],
        },
      ],
    ];
    const result = triple_cards.map((card) => (
      <DoubleCard input={card} ads={true} />
    ));
    return <div>{result}</div>;
  }
}

export default Products;
