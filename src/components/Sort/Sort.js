import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import customSyntaxHighlighterStyle from "./customSyntaxHighlighterStyle";
import { IconContext } from "react-icons";
import { FaStop, FaStepForward, FaUndo } from "react-icons/fa";
import content from "content/content";
import styles from "styles/styleconfig";
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
      this.renderFrame();
    });
  };

  clearCanvas() {
    // fill background color of canvas
    const { canvas, ctx } = this.state;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = styles.color.cblack;
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

  renderSnapshot = (snapshot) => {
    const { canvas } = this.state;
    const { emph1, emph2, emph3, order } = snapshot;
    const array = order;
    this.clearCanvas();
    for (let i = 0; i < array.length; i++) {
      let color = styles.color.c1;
      if (emph1 && emph1.includes(i)) {
        color = styles.color.c4;
      }
      if (emph2 && emph2.includes(i)) {
        color = styles.color.c5;
      }
      if (emph3 && emph3.includes(i)) {
        color = "red";
      }
      this.drawBar(
        i,
        (array[i] / Math.max(...array)) * canvas.height + canvas.height * 0.01,
        color
      );
    }
  };

  renderFrame = () => {
    if (this.state.currentFrame < this.state.history.length) {
      this.renderSnapshot(this.state.history[this.state.currentFrame]);
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
        this.renderFrame();
      }, styles.sort.delay);
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
    this.renderFrame();
    this.stopRendering();
  };

  restartSort = () => {
    this.stopRendering();
    this.clearHistory();
    this.initArray();
    this.initCanvas();
    this.initCurrentFrame();
    this.setState({ isRunning: false }, () => {
      this.startRendering();
    });
  };

  render() {
    const { sort } = this.props;
    return (
      <div className="sort-container">
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
          </button>
          <div className="sort-button-container">
            <IconContext.Provider value={{ style: styles.icons.sort }}>
              <button className="sort-button" onClick={this.stopSort}>
                <FaStop />
              </button>
              <button className="sort-button" onClick={this.stepThruSort}>
                <FaStepForward />
              </button>
              <button className="sort-button" onClick={this.restartSort}>
                <FaUndo />
              </button>
            </IconContext.Provider>
          </div>
          <div className="sort-code-container">
            <SyntaxHighlighter
              language="javascript"
              style={customSyntaxHighlighterStyle}
            >
              {sort.fnDisplayString ? sort.fnDisplayString : "loading code ..."}
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
      </div>
    );
  }
}

export default Sort;
