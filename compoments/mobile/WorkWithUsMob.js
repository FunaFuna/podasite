import React, { Component } from "react";

class WorkWithUsMob extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 2 };
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  handleSlideChange(slide) {
    this.setState({ position: slide });
  }

  render() {
    const slide_position = this.state.position;
    return (
      <div className="WorkMob">
        <a className="WorkMob-header">Как происходит работа с нами?</a>
        <div className="WorkMob-selector">
          <Number
            onNumberClicked={this.handleSlideChange}
            number={"1"}
            position={slide_position}
          />
          <Number
            onNumberClicked={this.handleSlideChange}
            number={"2"}
            position={slide_position}
          />
          <Number
            onNumberClicked={this.handleSlideChange}
            number={"3"}
            position={slide_position}
          />
          <Number
            onNumberClicked={this.handleSlideChange}
            number={"4"}
            position={slide_position}
          />
          <Number
            onNumberClicked={this.handleSlideChange}
            number={"5"}
            position={slide_position}
          />
        </div>
        <div className="WorkMob-slides">
          <WorkSlides position={slide_position} slide={slide_position} />
        </div>
      </div>
    );
  }
}

class WorkSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const slide_position = this.props.position;

    const slides = [
      {
        header: "1Проводим исследования и анализ потребностей бизнеса",
        text: "Определяем цели сайта и инструменты их достижения. Изучаем нишу бизнеса, сайты конкурентов и крос-категорий.",
        img: "./img/work-mob-slide.png",
      },
      {
        header: "2Проводим исследования и анализ потребностей бизнеса",
        text: "Определяем цели сайта и инструменты их достижения. Изучаем нишу бизнеса, сайты конкурентов и крос-категорий.",
        img: "./img/work-mob-slide.png",
      },
      {
        header: "3Проводим исследования и анализ потребностей бизнеса",
        text: "Определяем цели сайта и инструменты их достижения. Изучаем нишу бизнеса, сайты конкурентов и крос-категорий.",
        img: "./img/work-mob-slide.png",
      },
      {
        header: "4Проводим исследования и анализ потребностей бизнеса",
        text: "Определяем цели сайта и инструменты их достижения. Изучаем нишу бизнеса, сайты конкурентов и крос-категорий.",
        img: "./img/work-mob-slide.png",
      },
      {
        header: "5Проводим исследования и анализ потребностей бизнеса",
        text: "Определяем цели сайта и инструменты их достижения. Изучаем нишу бизнеса, сайты конкурентов и крос-категорий.",
        img: "./img/work-mob-slide.png",
      },
    ];

    return (
      <div className="workmob-slide">
        <a className="workmob-slide-header">
          {slides[slide_position - 1].header}
        </a>
        <a className="workmob-slide-text">{slides[slide_position - 1].text}</a>
        <img
          className="workmob-slide-image"
          src={slides[slide_position - 1].img}
        />
      </div>
    );
  }
}

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, color: "w" };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    // this.setState({ clicked: !this.state.clicked });
    this.props.onNumberClicked(this.props.number);
  }
  render() {
    const position = this.props.position;
    const number = this.props.number;
    const black_height = { height: "69px" };
    let color = this.state.color;
    const src = "./img/" + color + this.props.number + ".svg";
    if (position == number) {
      color = "b";
      return (
        <div onClick={this.clicked} className="num-mob">
          <img
            style={black_height}
            src={"./img/" + color + this.props.number + ".svg"}
          />
        </div>
      );
    } else {
      return (
        <div onClick={this.clicked} className="num-mob">
          <img src={src} />
        </div>
      );
    }
  }
}

export default WorkWithUsMob;
