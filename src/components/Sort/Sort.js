import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import customSyntaxHighlighterStyle from "./customSyntaxHighlighterStyle";
import Rainbow from "rainbowvis.js";
import { IconContext } from "react-icons";
import { FaPlay, FaStop, FaStepForward, FaUndo } from "react-icons/fa";
import content from "content/content";
import styleconfig from "styles/styleconfig";
import utils from "utils/utils";
import "./Sort.css";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      ctx: null,
      history: [],
      currentFrame: 0,
      interval: null,
      isRunning: false,
    };
  }

  componentDidMount() {
    this.initArray();
    this.initCanvas();
  }

  initCanvas = () => {
    // get ref and context of canvas
    const { canvas } = this.refs;
    // set offset height and width to fill container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    this.setState({ canvas, ctx }, () => {
      this.clearCanvas();
      // don't style bars on initial render
      this.renderFrame(false);
    });
  };

  clearCanvas() {
    // fill background color of canvas
    const { canvas, ctx } = this.state;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = utils.getDarkColor("--c-black");
    ctx.fill();
    ctx.closePath();
  }

  initArray = () => {
    // create array of random ints 0 to numBars-1, randomize order
    const { numBars } = content.sorts;
    let array = utils.shuffleArray([...Array(numBars).keys()]);
    this.setState({ array }, () => {
      this.createHistory();
    });
  };

  createHistory = () => {
    this.props.sort.fn(this.state.array, this.takeSnapshot);
  };

  drawBar = (position, height, color) => {
    const { numBars } = content.sorts;
    const { canvas, ctx } = this.state;
    const length = numBars;
    let spacingFactor = length / 2;
    let barWidth = canvas.width / (length + spacingFactor);
    let spacingWidth = canvas.width - barWidth * length;

    // draw bar
    ctx.beginPath();
    ctx.rect(
      (canvas.width / length) * position + spacingWidth / length / 2,
      canvas.height - height,
      barWidth,
      height
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  takeSnapshot = async (array, emph1, emph2, emph3) => {
    const newSnapshot = {
      order: [...array],
      emph1,
      emph2,
      emph3,
    };
    const newHistory = this.state.history;
    newHistory.push(newSnapshot);
    this.setState({ history: newHistory });
  };

  clearHistory = () => {
    this.setState({ history: [] });
  };

  initCurrentFrame = () => {
    this.setState({ currentFrame: 0 });
  };

  renderSnapshot = (snapshot, isStyled) => {
    const { canvas } = this.state;
    const { emph1, emph2, emph3, order } = snapshot;
    const array = order;
    const { length } = array;
    const max = Math.max(...array);
    this.clearCanvas();

    // init spectrum to color bars based on height
    const rainbow = new Rainbow();
    rainbow.setSpectrum("purple", "blue", "green", "yellow", "red");
    rainbow.setNumberRange(1, length);

    for (let i = 0; i < length; i++) {
      let barHeight = (array[i] / max) * canvas.height;
      let color = `#${rainbow.colorAt(array[i])}`;
      if (isStyled && emph1 && emph1.includes(i)) {
        color = "white";
      }
      if (isStyled && emph2 && emph2.includes(i)) {
        color = "white";
      }
      if (isStyled && emph3 && emph3.includes(i)) {
        color = "white";
      }
      this.drawBar(i, barHeight, color);
    }
  };

  renderFrame = (isStyled) => {
    if (this.state.currentFrame < this.state.history.length) {
      this.renderSnapshot(
        this.state.history[this.state.currentFrame],
        isStyled
      );
      this.setState({ currentFrame: this.state.currentFrame + 1 });
    }
  };

  stopRendering = () => {
    clearInterval(this.state.interval);
    this.setState({ isRunning: false });
  };

  startRendering = () => {
    if (!this.state.isRunning) {
      const interval = setInterval(() => {
        this.renderFrame(true);
      }, styleconfig.sort.delay);
      this.setState({ interval, isRunning: true });
    } else {
      this.stopRendering();
    }
  };

  startSort = () => {
    this.startRendering();
  };

  stopSort = () => {
    this.stopRendering();
  };

  stepThruSort = () => {
    this.renderFrame(true);
    this.stopRendering();
  };

  restartSort = () => {
    this.stopRendering();
    this.clearHistory();
    this.initArray();
    this.initCanvas();
    this.initCurrentFrame();
    this.setState({ isRunning: false });
  };

  render() {
    const { sort } = this.props;
    return (
      <div className="sort-container">
        <IconContext.Provider
          value={{
            style: {
              ...styleconfig.icons.m,
              ...styleconfig.icons.sort,
            },
          }}
        >
          <div className="sort-canvas-container">
            <canvas
              className="sort-canvas"
              ref="canvas"
              onClick={
                this.state.currentFrame < this.state.history.length
                  ? this.startSort
                  : this.restartSort
              }
            ></canvas>
          </div>
          <div className="sort-info-container">
            <button
              className="sort-button"
              onClick={
                this.state.currentFrame < this.state.history.length
                  ? this.startSort
                  : this.restartSort
              }
            >
              <h2 className="sort-title">{sort.emoji + " " + sort.title}</h2>
              {this.state.currentFrame < this.state.history.length ? (
                this.state.isRunning ? (
                  <FaStop />
                ) : (
                  <FaPlay />
                )
              ) : (
                <FaUndo />
              )}
            </button>
            <div className="sort-button-container">
              <button className="sort-button" onClick={this.stopSort}>
                <FaStop />
              </button>
              <button className="sort-button" onClick={this.stepThruSort}>
                <FaStepForward />
              </button>
              <button className="sort-button" onClick={this.restartSort}>
                <FaUndo />
              </button>
            </div>
            <p class="sort-description">{sort.description}</p>
            <div className="sort-code-container">
              <SyntaxHighlighter
                language="javascript"
                style={customSyntaxHighlighterStyle}
              >
                {sort.fnDisplayString
                  ? sort.fnDisplayString
                  : "loading code ..."}
              </SyntaxHighlighter>
            </div>
            <table className="sort-table">
              <tbody>
                <tr>
                  <th>{content.sorts.complexityHeader}</th>
                  <th>{content.sorts.timeHeader}</th>
                  <th>{content.sorts.spaceHeader}</th>
                </tr>
                <tr>
                  <td>best</td>
                  <td>{sort.complexity.time.best}</td>
                  <td>{sort.complexity.space.worst}</td>
                </tr>
                <tr>
                  <td>avg</td>
                  <td>{sort.complexity.time.avg}</td>
                  <td>{sort.complexity.space.worst}</td>
                </tr>
                <tr>
                  <td>worst</td>
                  <td>{sort.complexity.time.worst}</td>
                  <td>{sort.complexity.space.worst}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </IconContext.Provider>
      </div>
    );
  }
}

export default Sort;
