import React, { Component } from "react";
import QuoteMob from "./QuoteMob";
class PageMainPartMob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="pagemain">
          <div className="pagemain-text">
            <a className="pagemain-small">{this.props.smallText}</a>
            <a className="pagemain-header">{this.props.header}</a>
            <a className="pagemain-button">
              {this.props.button ? this.props.button : "Смотреть проекты"}
            </a>
          </div>
          <img className="pagemain-img" src={this.props.img} />
        </div>
        {this.props.quoteText ? <QuoteMob text={this.props.quoteText} /> : ""}
      </>
    );
  }
}

export default PageMainPartMob;
