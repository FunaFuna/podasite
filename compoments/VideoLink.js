import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.state = { video: "null", isHovering: false };
    this.pull_data = this.pull_data.bind(this);
  }

  pull_data(data) {
    this.setState({ video: data });
    // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

  render() {
    return (
      <div class="page_router">
        <Screen type={true} content={this.state.video} />
        {/* <Cursor /> */}
        {/* <Router> */}
        <ul className="links">
          <PageLink
            checkHovering={this.checkHoveringParent}
            func={this.pull_data}
            id="advertisements"
            link="Реклама"
            video="./video/showreel1.mp4"
          />
          <PageLink
            func={this.pull_data}
            id="webpages"
            link="Сайты"
            video="./video/showreel.mp4"
          />
          <PageLink
            func={this.pull_data}
            id="designes"
            link="Дизайн"
            video="./video/showreel2.mp4"
          />
          <PageLink
            func={this.pull_data}
            id="brandings"
            link="Брендинг"
            video="./video/showreel2.mp4"
          />
        </ul>
      </div>
    );
  }
}

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "./video/showreel1.mp4", type: this.props.type };
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.content !== this.state.content) {
      this.setState({ content: nextProps.content });
    }
  }

  render() {
    const type = this.state.type;
    const content = this.state.content;
    if (type) {
      return (
        <div className="main_animation">
          <ReactPlayer
            width={"70%"}
            height={"70%"}
            // className="react-player"
            // url={content ? content : "./video/showreel1.mp4"}
            url={"./video/showreel1.mp4"}
            // url={video_url}
            loop={true}
            playing={true}
            muted={true}
          />
        </div>
      );
    } else {
      return (
        <div className="main_animation">
          <img class="animation" src="./img/center_img.svg" alt="anim" />
        </div>
      );
    }
  }
}

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event) => {
    const { pageX, pageY, clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

const Cursor = (video_url) => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        className="video_circle"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
          cursor: "none",
        }}
      >
        <ReactPlayer
          className="react-player"
          url="./video/showreel2.mp4"
          // url={video_url}
          loop={true}
          playing={true}
          muted={true}
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

class PageLink extends Component {
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

    this.props.func(this.props.video);
  }

  handleMouseOut() {
    this.setState(() => ({
      isHovering: false,
    }));
    this.props.func("./video/showreel1.mp4");
  }
  render() {
    const href = this.props.href;
    const id = this.props.id;
    const link = this.props.link;
    const linkB = this.props.linkB;
    const video = this.props.video;
    const hovering = this.state.isHovering;

    switch (hovering) {
      case true:
        return (
          <li
            className="link"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            // isHovering={this.state.isHovering}
          >
            {/* <Cursor video_url={video} /> */}
            {/* TODO Видео в курсоре выключено, пока*/}
            <a className="VideoLinkHeaderHover" href={"/" + id}>
              {link}
            </a>
          </li>
        );
      case false:
        return (
          <li
            className="link"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            <a className="VideoLinkHeader">{link}</a>
          </li>
        );
    }
  }
}

export default VideoLink;
