import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import onClickOutside from "react-onclickoutside";

class MarqueeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const first_row = [
      "Энергоносители",
      "Продукты",
      "Перевозки",
      "Производство",
    ];

    const second_row = ["Безопасность", "Клининг", "Тюнинг", "Красота"];
    const third_row = ["E-commerce ", "Строительство", "Фешн", "Автомобили"];

    const first_row_ready = first_row.map((tag) => <RunnerMobile text={tag} />);
    const second_row_ready = second_row.map((tag) => (
      <RunnerMobile text={tag} />
    ));
    const third_row_ready = third_row.map((tag) => <RunnerMobile text={tag} />);

    return (
      <>
        <Marquee
          direction="right"
          speed={30}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
        >
          <div className="mobile-marquee-row">{first_row_ready}</div>
        </Marquee>
        <Marquee
          direction="left"
          speed={30}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
        >
          <div className="mobile-marquee-row">{second_row_ready}</div>
        </Marquee>
        <Marquee
          direction="right"
          speed={30}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
        >
          <div className="mobile-marquee-row">{third_row_ready}</div>
        </Marquee>
      </>
    );
  }
}

class RunnerMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const text = this.props.text;
    const clicked = this.state.clicked;

    switch (clicked) {
      case false:
        return (
          <div onClick={this.clicked} className={"mobile-runner"}>
            <img src={"./img/white_dot.svg"} alt="card" />
            <a>{text}</a>
          </div>
        );
      case true:
        return (
          <div onClick={this.clicked} className={"mobile-runner"}>
            <img src={"./img/black_dot.svg"} alt="card" />
            <a>{text}</a>
          </div>
        );
    }
  }
}

export default MarqueeMobile;
