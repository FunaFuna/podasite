import React, { Component } from "react";
class MediaSlot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const img = this.props.img;
    const text = this.props.text;
    const textSmall = this.props.textSmall;
    const bubbles = this.props.bubbles;
    const bubblesAfter = bubbles.map((tag) => (
      <a className="bubble-media">{tag}</a>
    ));
    return (
      <div className="media-slot">
        <img src={img}></img>
        <div className="mediaslot-info">
          <a className="mediaslot-header">{text}</a>
          <a className="mediaslot-text">{textSmall}</a>
        </div>
        <div className="mediaslot-bubles-wrapper">{bubblesAfter}</div>
      </div>
    );
  }
}

export default MediaSlot;
