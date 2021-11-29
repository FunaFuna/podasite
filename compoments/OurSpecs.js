import React, { Component } from "react";
class Specs extends Component {
  render() {
    return (
      <div class="container-specs">
        <a class="specs">
          {this.props.title ? this.props.title : "Наша спецификация:"}
        </a>
        <div class="lists">
          <div className="list-row">
            <a className="list-header">Реклама</a>

            <a>Контекстная реклама</a>
            <a>КМС Реклама</a>
            <a>FB/INST Реклама</a>
            <a>Динамическая реклама</a>
            <a>E-commerce</a>
            <a>Рекламное сопровождение</a>
          </div>
          <div className="list-row">
            <a className="list-header">Сайты</a>

            <a>Одностраничный сайт</a>
            <a>Мульти-лендинг</a>
            <a>Сайт компании</a>
            <a>Онлайн магазин</a>
            <a>Приложения</a>
          </div>
          <div className="list-row">
            <a className="list-header">Дизайн</a>

            <a>Логотип и логобук</a>
            <a>Фирменный стиль</a>
            <a>Брендбук</a>
            <a>Веб-дизайн</a>
            <a>UI/UX</a>
            <a>Дизайн сопровождение</a>
          </div>
          <div className="list-row">
            <a className="list-header">Брендинг</a>

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

export default Specs;
