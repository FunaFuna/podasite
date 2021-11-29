import React, { Component } from "react";
import Marquee from "react-fast-marquee";

class Running extends Component {
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

    const first_row_ready = first_row.map((tag) => <Runner text={tag} />);
    const second_row_ready = second_row.map((tag) => <Runner text={tag} />);
    const third_row_ready = third_row.map((tag) => <Runner text={tag} />);
    return (
      <div className="running_container">
        <Marquee
        // play={false}
          direction="right"
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <div className="row">{first_row_ready}</div>
        </Marquee>

        <Marquee
          direction="left"
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <div className="row">{second_row_ready}</div>
        </Marquee>
        <Marquee
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          direction="right"
        >
          <div className="row">{third_row_ready}</div>
        </Marquee>

      </div>
    );
  }
}

class Runner extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const text = this.props.text;

    return (
      <a className="runner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80.04"
          height="80.328"
          viewBox="0 0 80.04 80.328"
        >
          <path
            id="Union_38"
            data-name="Union 38"
            d="M24.7,53.867h-.01V53.8L23.6,46.247C10.48,45.766,0,35.6,0,23.133,0,10.356,11,0,24.574,0a26.274,26.274,0,0,1,3.7.261C42.348,1.944,53.226,13.254,53.226,26.956c0,14.837-12.753,26.867-28.5,26.911l-.024.006Z"
            transform="translate(33.138 2.776) rotate(34)"
            fill="none"
            stroke="#000"
            stroke-width="4"
          />
        </svg>

        <a>{text}</a>
        {/* <div className="runnerImg">
          <img src="./img/runnerImg.png"/>
        </div> */}
      </a>
    );
  }
}

export default Running;
