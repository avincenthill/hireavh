// import utils from '../../utils/utils';

class Paddle {
  constructor(context) {
    this.context = context;

    this.color = this.context.paddleColor;
    this.width = this.context.paddleWidth;
    this.thickness = this.context.paddleThickness;

    this.updateDispProps();
  }

  updateDispProps() {
    this.x = this.dispX - this.context.canvas.width / 2;
  }
}

export default Paddle;
