import React, { Component } from "react";
import Quote from "./Quote";
class PageMainPart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ads">
        <div className="header">
          <p className="small">{this.props.smallText}</p>
          <p className="medium">{this.props.header}</p>
          <a href="#" className="button">
            {this.props.button ? this.props.button : "Смотреть проекты"}
          </a>
        </div>
        <div className="img">
          <img src={this.props.img} />
        </div>
        <div className="quote">
          {this.props.quoteText ? (
            <Quote class={"middle_quote"} text={this.props.quoteText} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default PageMainPart;
