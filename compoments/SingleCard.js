import React, { Component } from "react";
class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imgPath = this.props.imgPath;
    const main_text = this.props.main_text;
    const second_text = this.props.second_text;
    const tags_before = this.props.tags_before;
    const tags = tags_before.map((tag) => <a className="tag">{tag}</a>);

    return (
      <div className="single_card">
        <img src={imgPath} alt="card" />
        <div className="bottom_text">
          <a className="main">{main_text}</a>
          <a className="second">{second_text}</a>
        </div>
        <div className="tags">{tags}</div>
      </div>
    );
  }
}

export default SingleCard;
