import './Pomodoro.css';
import { NavList } from 'components/Nav/Nav';
import Page from 'components/Page/Page';
import React from 'react';
// TBD: refactor text content into content directory
// import content from "content/content";
import utils from '../../utils/utils';

// TBD: implement sounds on timer done
// TBD: go thru this file and pull out constants, refactor
class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    // animation
    this.renderFrameDelayMs = 100;
    this.interval = null;
    // canvas
    this.canvas = null;
    this.canvasName = 'pomodoro-canvas';
    this.ctx = null;
    this.canvasColor = 'black';
    // timer
    this.font = '140px Helvetica Neue';
    this.isRunning = false;
    this.timerFraction = 1;
    this.workEmoji = '🍅';
    this.breakEmoji = '🎉';
    this.state = {
      isWorkMode: true,
    };
  }

  componentDidMount() {
    this.initCanvas();
    this.startRenderLoop();
  }

  initCanvas = () => {
    this.canvas = this.refs[this.canvasName];
    if (this.canvas) {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.ctx = this.canvas.getContext('2d');
    }
  };

  startRenderLoop() {
    // start render loop
    this.interval = setInterval(() => {
      this.renderCanvas();
      if (this.isRunning) {
        // TBD: implement timer logic
        this.timerFraction -= 0.01;
      }
    }, this.renderFrameDelayMs);
  }

  renderCanvas() {
    // from lowest to highest z-index
    this.clearCanvas();
    this.drawEmoji();
    this.drawTimerMask(this.timerFraction);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawEmoji() {
    this.drawCanvasText(
      this.state.isWorkMode ? this.workEmoji : this.breakEmoji,
      this.canvas.width / 2,
      this.canvas.height / 2 + 50
    );
  }

  // TBD: draw this behind with react text/css
  drawCanvasText(text, width, height, alignment = 'center') {
    this.ctx.font = this.font;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, width, height);
  }

  drawTimerMask(fraction) {
    this.ctx.beginPath();
    this.ctx.arc(
      this.canvas.width / 2,
      this.canvas.height / 2,
      125,
      -0.5 * Math.PI,
      fraction * 2 * Math.PI - 0.5 * Math.PI
    );
    this.ctx.lineWidth = 20;
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
    this.ctx.closePath();
  }

  handleCanvasClick = () => {
    this.isRunning = this.isRunning ? false : true;
  };

  handleToggleModeClick = () => {
    this.setState({ isWorkMode: this.state.isWorkMode ? false : true });
  };

  render() {
    return (
      <Page>
        <div className="pomodoro-container">
          <canvas
            className={this.canvasName}
            ref={this.canvasName}
            onClick={this.handleCanvasClick}
          ></canvas>
          <button
            className="pomodoro-toggle-mode-btn"
            onClick={this.handleToggleModeClick}
          >
            {this.state.isWorkMode ? this.breakEmoji : this.workEmoji}
          </button>
        </div>
        <NavList></NavList>
        <hr></hr>
      </Page>
    );
  }
}

export default Pomodoro;
