import React, { Component } from "react";
class DoubleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const input_array = this.props.input;
    const ads = this.props.ads;
    const imgPath = input_array[0].imgPath;
    const main_text = input_array[0].main_text;
    const second_text = input_array[0].second_text;
    const tags_before = input_array[0].tags_before;
    const tags = tags_before.map((tag) => <a className="tag">{tag}</a>);

    const imgPath2 = input_array[1].imgPath;
    const main_text2 = input_array[1].main_text;
    const second_text2 = input_array[1].second_text;
    const tags_before2 = input_array[1].tags_before;
    const tags2 = tags_before2.map((tag) => <a className="tag">{tag}</a>);
    if (ads) {
      return (
        <div className="triple_cards-container">
          <div className="first_card">
            <img src={imgPath} alt="card" />
            <div className="bottom_text">
              <a className="main">{main_text}</a>
              <a className="second">{second_text}</a>
            </div>
            <div className="tags">{tags}</div>
          </div>

          <div className="second_card">
            <div>
              <img src={imgPath2} alt="card" />
              <div className="bottom_text">
                <a className="main">{main_text2}</a>
                <a className="second">{second_text2}</a>
              </div>
              <div className="tags">{tags2}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="double_cards-container">
          <div>
            <img src={imgPath} alt="card" />
            <div className="bottom_text">
              <a className="main">{main_text}</a>
              <a className="second">{second_text}</a>
            </div>
            <div className="tags">{tags}</div>
          </div>

          <div className="bottom_card">
            <div>
              <img src={imgPath2} alt="card" />
              <div className="bottom_text">
                <a className="main">{main_text2}</a>
                <a className="second">{second_text2}</a>
              </div>
              <div className="tags">{tags2}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DoubleCard;
