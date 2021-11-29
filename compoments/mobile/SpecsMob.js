import React, { Component } from "react";

class SpecsMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="specs-mob">
        <a className="specs-mob-header">Наша спецификация:</a>
        <div className="specs-mob-column">
          <a className="specs-mob-column-header">Реклама</a>
          <div className="specs-mob-items">
            <a>Контекстная реклама</a>
            <a>КМС Реклама</a>
            <a>FB/INST</a>
            <a>Реклама</a>
            <a>Динамическая реклама</a>
            <a>E-commerce</a>
            <a>Рекламное сопровождение</a>
          </div>
        </div>
        <div className="specs-mob-column">
          <a className="specs-mob-column-header">Дизайн</a>
          <div className="specs-mob-items">
            <a>Логотип и логобук</a>
            <a>Фирменный стиль</a>
            <a>Брендбук</a>
            <a>Веб-дизайн</a>
            <a>UI/UX</a>
            <a>Дизайн сопровождение</a>
          </div>
        </div>
        <div className="specs-mob-column">
          <a className="specs-mob-column-header">Реклама</a>
          <div className="specs-mob-items">
            <a>Запуск бренда</a>
            <a>Концепция бренда</a>
            <a>Digital активности и SMM</a>
            <a>Бренд-контент</a>
            <a>Споровождение</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecsMob;
