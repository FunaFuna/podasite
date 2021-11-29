import React, { Component } from "react";

class CompaniesMob extends Component {
  constructor(props) {
    super(props);
    this.state = { card_clicked: "Autoserwis Elcar" };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selected) {
    this.setState({ card_clicked: selected });
  }

  render() {
    const comps = [
      {
        header: "Oiler",
        text: "Сеть автосервисов в Киеве",
        image: "./img/oiler-logo-text-mob.png",
        tags: ["Adwords реклама", "FB/Inst реклама", "Рекламная стратегия"],
      },
      {
        header: "Autoserwis Elcar",
        text: "Сеть автосервисов в Киеве",
        image: "./img/elcar-mob.png",
        tags: ["Adwords реклама", "Разработка сайта"],
      },
      {
        header: "Автосалон Ford",
        text: "Представитель Ford в Чернигове",
        image: "./img/ford-logo-mob.png",
        tags: ["Adwords реклама", "Разработка сайта"],
      },
      {
        header: "Magr Auto",
        text: "Группа компаний Магр",
        image: "./img/magr-logo-mob.png",
        tags: ["Adwords реклама", "Разработка сайта"],
      },
      {
        header: "Основа Буд 7",
        text: "Строительная компания",
        image: "./img/osnova-bud-logo-mob.png",
        tags: ["Adwords реклама", "Разработка сайта", "Диджитал стратегия"],
      },
      {
        header: "Firusas",
        text: "Интернет-магазин премиум одежды",
        image: "./img/firusas-logo-mob.png",
        tags: ["Adwords реклама", "Разработка сайта", "Диджитал стратегия"],
      },
    ];

    const cardsDone = comps.map((card, i) => (
      <CompanyMob
        header={card.header}
        text={card.text}
        image={card.image}
        tags={card.tags}
        handleClick={this.handleSelect}
        selected={this.state.card_clicked}
      />
    ));
    const buttonMob = (
      <div className="button-mob-selector">
        <div className="button-mob-selector-wrapper">
          <a>Ещё</a>
        </div>
      </div>
    );
    return (
      <div className="companies-mob">
        <a className="companies-mob-header">Компании с которыми мы работаем:</a>
        {cardsDone}
        <hr className="lasthr"></hr>
        {buttonMob}
      </div>
    );
  }
}

class CompanyMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked() {
    this.props.handleClick(this.props.header);
  }
  render() {
    const header = this.props.header;
    const text = this.props.text;
    const image = this.props.image;
    const tags = this.props.tags;
    const tags_after = tags.map((tag) => (
      <a className="company-mob-tag">{tag}</a>
    ));
    return (
      <div
        className={
          this.props.selected == this.props.header
            ? "company-mob selected"
            : "company-mob"
        }
        onClick={this.handleClicked}
      >
        <hr></hr>
        <div className="company-mob-wrapper">
          <div className="company-mob-header">
            <a className="company-mob-header-top">{header}</a>
            <a className="company-mob-header-bottom">{text}</a>
          </div>
          <div className="company-mob-image">
            <img src={image}></img>
          </div>
          <div className="company-mob-tags">{tags_after}</div>
        </div>
      </div>
    );
  }
}

export default CompaniesMob;
