import React, { Component } from "react";

class AboutUsMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-mob">
        <a className="about-us-header">Про агентство</a>
        <a className="about-us-text">
          Мы начали развивать агентство в 2017 году. Два интузиаста не имея
          денег начали развивать. За 5 лет своей работы агентство ПАДАЙТЕ ГРАШЕЙ
          выполнило более 50 проэктов. В том числе заграницей
        </a>
        <div className="about-us-map-wrapper">
          <PointMob location={{ left: "92", top: "147" }} />
          <PointMob location={{ left: "48", top: "269" }} />
          <PointMob location={{ left: "163", top: "238" }} />
          <PointMob location={{ left: "121", top: "283" }} />
          <PointMob location={{ left: "326", top: "290" }} />
          <PointMob location={{ left: "110", top: "320" }} />
          <PointMob location={{ left: "95", top: "404" }} />
          <img className="about-us-map" src="./img/europe.svg" />
        </div>
      </div>
    );
  }
}
class PointMob extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => ({
      isHovering: !this.state.isClicked,
    }));
  }

  render() {
    const location_left = this.props.location.left;
    const location_top = this.props.location.top;
    const photo = this.props.photo;
    const hovering = this.state.isClicked;
    let mystyle = "";
    if (hovering) {
      mystyle = {
        left: location_left - 100 + "px",
        top: location_top - 90 + "px",
      };
    } else {
      mystyle = {
        left: location_left + "px",
        top: location_top + "px",
      };
    }

    switch (hovering) {
      case true:
        return (
          <div>
            <img
              className="big-ping-mob"
              onClick={this.handleClick}
              src="./img/bigping.png"
              style={mystyle}
            />
          </div>
        );
      case false:
        return (
          <div>
            <img
              className="ping-mob"
              onClick={this.handleClick}
              src="./img/ping.svg"
              style={mystyle}
            />
          </div>
        );
    }
  }
}

export default AboutUsMob;
