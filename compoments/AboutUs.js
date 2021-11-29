import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1500 });
  return isDesktop ? children : null;
};
const Laptop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1300, maxWidth: 1399 });
  return isDesktop ? children : null;
};
const BigLaptop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400, maxWidth: 1500 });
  return isDesktop ? children : null;
};
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-us">
        <div className="map-text">
          <div className="top">
            <a>Про агентство</a>
          </div>
          <div className="bottom">
            <a>
              Мы начали развивать агентство в 2017 году. Два интузиаста не имея
              денег начали развивать. За 5 лет своей работы агентство ПАДАЙТЕ
              ГРАШЕЙ выполнило более 50 проэктов.
            </a>
          </div>
        </div>
        <div className="map">
          <img className="map-img" src="./img/europe.svg" />
          <Laptop>
            <Point location={{ left: "45", top: "27" }} />
            <Point location={{ left: "41", top: "47" }} />
            <Point location={{ left: "53", top: "43" }} />
            <Point location={{ left: "48", top: "49" }} />
            <Point location={{ left: "48", top: "56" }} />
            <Point location={{ left: "46", top: "70" }} />
            <Point location={{ left: "71", top: "50" }} />
          </Laptop>
          <BigLaptop>
            <Point location={{ left: "57", top: "27" }} />
            <Point location={{ left: "52", top: "47" }} />
            <Point location={{ left: "64", top: "43" }} />
            <Point location={{ left: "60", top: "49" }} />
            <Point location={{ left: "60", top: "56" }} />
            <Point location={{ left: "57", top: "70" }} />
            <Point location={{ left: "82", top: "50" }} />
          </BigLaptop>
          <Desktop>
            <Point location={{ left: "50", top: "27" }} />
            <Point location={{ left: "46", top: "47" }} />
            <Point location={{ left: "58", top: "43" }} />
            <Point location={{ left: "52", top: "49" }} />
            <Point location={{ left: "52", top: "56" }} />
            <Point location={{ left: "51", top: "70" }} />
            <Point location={{ left: "76", top: "50" }} />
          </Desktop>
        </div>
      </div>
    );
  }
}

class Point extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovering: false };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver() {
    this.setState(() => ({
      isHovering: true,
    }));
  }

  handleMouseOut() {
    this.setState(() => ({
      isHovering: false,
    }));
  }
  render() {
    const location_left = this.props.location.left;
    const location_top = this.props.location.top;
    const photo = this.props.photo;
    const hovering = this.state.isHovering;
    let mystyle = "";
    if (hovering) {
      mystyle = {
        left: location_left - 5 + "%",
        top: location_top - 8 + "%",
      };
    } else {
      mystyle = {
        left: location_left + "%",
        top: location_top + "%",
      };
    }

    switch (hovering) {
      case true:
        return (
          <img
            className="big-ping"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            src="./img/bigping.png"
            style={mystyle}
          />
        );
      case false:
        return (
          <img
            className="ping"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            src="./img/ping.svg"
            style={mystyle}
          />
        );
    }
  }
}

export default AboutUs;
