import React, { Component } from "react";
class WorkWithUs extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 1 };
    this.addPosition = this.addPosition.bind(this);
  }

  addPosition() {
    let position = this.state.position;
    console.log(position);

    if (position <= 4) {
      this.setState({
        position: this.state.position + 1,
      });
    } else {
      this.setState({
        position: 1,
      });
    }
  }
  render() {
    const text_arr = [
      {
        top: (
          <a>
            1Проводим исследования
            <br />и анализ потребностей бизнеса
          </a>
        ),
        bottom: (
          <a>
            1Определяем цели сайта и инструменты их <br />
            достижения. Изучаем нишу бизнеса, сайты <br />
            конкурентов и крос-категорий.
            <br />
          </a>
        ),
        img: "./img/WorkImg.png",
      },
      {
        top: (
          <a>
            2Проводим исследования
            <br />и анализ потребностей бизнеса
          </a>
        ),
        bottom: (
          <a>
            2Определяем цели сайта и инструменты их <br />
            достижения. Изучаем нишу бизнеса, сайты <br />
            конкурентов и крос-категорий.
            <br />
          </a>
        ),
        img: "./img/WorkImg.png",
      },
      {
        top: (
          <a>
            3Проводим исследования
            <br />и анализ потребностей бизнеса
          </a>
        ),
        bottom: (
          <a>
            3Определяем цели сайта и инструменты их <br />
            достижения. Изучаем нишу бизнеса, сайты <br />
            конкурентов и крос-категорий.
            <br />
          </a>
        ),
        img: "./img/WorkImg.png",
      },
      {
        top: (
          <a>
            4Проводим исследования
            <br />и анализ потребностей бизнеса
          </a>
        ),
        bottom: (
          <a>
            4Определяем цели сайта и инструменты их <br />
            достижения. Изучаем нишу бизнеса, сайты <br />
            конкурентов и крос-категорий.
            <br />
          </a>
        ),
        img: "./img/WorkImg.png",
      },
      {
        top: (
          <a>
            5Проводим исследования
            <br />и анализ потребностей бизнеса
          </a>
        ),
        bottom: (
          <a>
            5Определяем цели сайта и инструменты их <br />
            достижения. Изучаем нишу бизнеса, сайты <br />
            конкурентов и крос-категорий.
            <br />
          </a>
        ),
        img: "./img/WorkImg.png",
      },
    ];

    const position = this.state.position;

    return (
      <div>
        <a className="head">Как происходит работа с нами?</a>

        <div className="work-us">
          <div className="main">
            <div className="numbers">
              <ul>
                <Number number={"1"} position={position} />
                <Number number={"2"} position={position} />
                <Number number={"3"} position={position} />
                <Number number={"4"} position={position} />
                <Number number={"5"} position={position} />
              </ul>
            </div>
            <div className="text">
              <div className="top">{text_arr[position - 1].top}</div>
              <div className="arrow">
                <img src="./img/arrowbutton.svg" onClick={this.addPosition} />
              </div>
              <div className="bottom">{text_arr[position - 1].bottom}</div>
            </div>
            <div>
              <a></a>
            </div>
          </div>
          <div className="side-img">
            <img src={text_arr[position - 1].img} />
          </div>
        </div>
      </div>
    );
  }
}

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "w" };
  }
  render() {
    const position = this.props.position;
    const number = this.props.number;
    let color = this.state.color;
    if (position == number) {
      color = "b";
    } else {
      console.log("nope");
    }
    //TODO исправить картинку черную номеров
    // const src = this.state.color + this.props.number;
    const src = "./img/" + color + this.props.number + ".svg";
    return (
      <li className="num">
        <img src={src} />
      </li>
    );
  }
}

export default WorkWithUs;
