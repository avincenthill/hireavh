import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import customSyntaxHighlighterStyle from "./customSyntaxHighlighterStyle";
import content from "content/content";
import styles from "styles/styleconfig";
import utils from "utils/utils";
import "./Sort.css";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: null, canvas: null, ctx: null };
  }

  componentDidMount() {
    this.initCanvas();
    this.initArray();
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
    let array = [...Array(numBars).keys()];
    array = utils.shuffleArray(array);
    this.setState({ array }, () => {
      this.renderArray(this.state.array);
    });
  };

  drawBar = (position, height, color) => {
    const { canvas, ctx, array } = this.state;
    const length = array.length;
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

  renderArray = (array) => {
    const { canvas } = this.state;
    this.clearCanvas();
    for (let i = 0; i < array.length; i++) {
      let color = styles.color.c4;
      this.drawBar(
        i,
        (array[i] / Math.max(...array)) * canvas.height + canvas.height * 0.01,
        color
      );
    }
  };

  renderSortFrame = async (array, emph1, emph2) => {
    this.renderArray(array, emph1, emph2);
    await utils.sleep(styles.sort.sortDelay);
  };

  handleClick = () => {
    this.props.sort.fn(this.state.array, this.renderSortFrame);
  };

  render() {
    const { sort } = this.props;
    return (
      <div className="sort-container">
        <div className="sort-canvas-container">
          <canvas
            className="sort-canvas"
            ref="canvas"
            onClick={this.handleClick}
          ></canvas>
        </div>
        <div className="sort-info-container">
          <button className="sort-button" onClick={this.handleClick}>
            <h2 className="sort-title">{sort.emoji + " " + sort.title}</h2>
          </button>
          <div className="sort-code-container">
            <SyntaxHighlighter
              language="javascript"
              style={customSyntaxHighlighterStyle}
            >
              {sort.fnDisplayString ? sort.fnDisplayString : "loading code ..."}
            </SyntaxHighlighter>
          </div>
          <table className="sort-table">
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
          </table>
        </div>
      </div>
    );
  }
}

export default Sort;
