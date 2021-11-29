import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      name: "",
      number: "",
      project: "",
      intrested: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkReady = this.checkReady.bind(this);
    this.sendResults = this.sendResults.bind(this);
    this.handleBubbleClick = this.handleBubbleClick.bind(this);
  }

  handleBubbleClick(bubble) {
    console.log(bubble);
    if (this.state.intrested.indexOf(bubble) === -1) {
      this.setState({ intrested: [...this.state.intrested, bubble] });
    } else {
      this.setState({
        intrested: this.state.intrested.filter((item) => item !== bubble),
      });
    }
  }

  sendResults() {
    this.setState({ finished: true });
    console.log(this.state);
    window.scrollTo(0, 0);
  }

  checkReady() {
    if (
      this.state.name != "" &&
      this.state.intrested.length > 0 &&
      this.state.number != "" &&
      this.state.project != ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  handleChange(e) {
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "number":
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        this.setState({ number: e.target.value });
        break;
      case "project":
        this.setState({ project: e.target.value });
        break;
    }
  }

  render() {
    const finished = this.state.finished;
    return (
      <>
        <Desktop>
          <div className="brief-wrapper">
            {finished ? (
              <div className="finished">
                <div className="finished-header">
                  <a>Спасибо за обращение!</a>
                  <img src="./img/emoji-finished.png" />
                </div>
                <a className="finished-text">
                  Мы уже получили вашу заявку и свяжемся с вами в ближайшее
                  время!
                </a>
                <a href="/" className="finished-link">
                  Вернуться на главную...
                </a>
              </div>
            ) : (
              <div className="started">
                <div className="started-header">
                  <a>Привет! Расскажите нам о своем проекте</a>
                  <img src="./img/emoji-start.png" />
                </div>
                <a className="started-intrested">Я интересуюсь...</a>
                <ul className="started-bubbles">
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="1"
                    title="Разработка сайта"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="2"
                    title="Разработка интернет магазина"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="3"
                    title="Айдентика"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="4"
                    title="CRM система"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="5"
                    title="Брендинг"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="6"
                    title="Контекстная реклама"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="7"
                    title="Таргетированная реклама"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="8"
                    title="Автоматизация продаж"
                  />
                </ul>
                <div className="started-inputs">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    placeholder="Ваше имя"
                  />
                  <input
                    onChange={this.handleChange}
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    id="number"
                    placeholder="Ваш телефон"
                  />
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="project"
                    placeholder="Пару слов о проекте"
                  />
                </div>
                {this.state.name != "" &&
                this.state.number != "" &&
                this.state.project != "" ? (
                  <a
                    onClick={this.sendResults}
                    style={{ color: "black", cursor: "pointer" }}
                    className="started-button"
                  >
                    Отправить заявку
                  </a>
                ) : (
                  <a className="started-button">Отправить заявку</a>
                )}
              </div>
            )}
          </div>
        </Desktop>
        <Mobile>
          <div className="brief-wrapper-mob">
            {finished ? (
              <div className="finished-mob">
                <div className="finished-header-mob">
                  <a>Спасибо за обращение!</a>
                  <img src="./img/emoji-finished.png" />
                </div>
                <a className="finished-text-mob">
                  Мы уже получили вашу заявку и свяжемся с вами в ближайшее
                  время!
                </a>
                <a href="/" className="finished-link-mob">
                  Вернуться на главную...
                </a>
                <div className="brief-close-button">
                  <a href="/">
                    <img src="./img/close_symbol.svg" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="started-mob">
                <div className="started-header-mob">
                  <a>Привет! Расскажите нам о своем проекте</a>
                  <img src="./img/emoji-start.png" />
                </div>
                <a className="started-intrested-mob">Я интересуюсь...</a>
                <ul className="started-bubbles-mob">
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="1"
                    title="Разработка сайта"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="2"
                    title="Разработка интернет магазина"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="3"
                    title="Контекстная реклама"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="4"
                    title="Таргетированная реклама"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="5"
                    title="Айдентика"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="6"
                    title="Брендинг"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="7"
                    title="Автоматизация продаж"
                  />
                  <Bubble
                    onBubbleSelect={this.handleBubbleClick}
                    id="8"
                    title="CRM"
                  />
                </ul>
                <div className="started-inputs-mob">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    placeholder="Ваше имя"
                  />
                  <input
                    onChange={this.handleChange}
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    id="number"
                    placeholder="Ваш телефон"
                  />
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="project"
                    placeholder="Пару слов о проекте"
                  />
                </div>
                {this.state.name != "" &&
                this.state.number != "" &&
                this.state.project != "" ? (
                  <a
                    onClick={this.sendResults}
                    style={{ color: "black", cursor: "pointer" }}
                    className="started-button-mob"
                  >
                    Отправить заявку
                  </a>
                ) : (
                  <a className="started-button-mob">Отправить заявку</a>
                )}
              </div>
            )}
          </div>
        </Mobile>
      </>
    );
  }
}

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({ clicked: !this.state.clicked });
    this.props.onBubbleSelect(this.props.title);
  }
  render() {
    return (
      <>
        {this.state.clicked ? (
          <li onClick={this.clicked} className="choosed" id={this.props.id}>
            {this.props.title}
          </li>
        ) : (
          <li onClick={this.clicked} id={this.props.id}>
            {this.props.title}
          </li>
        )}
      </>
    );
  }
}

export default Brief;
