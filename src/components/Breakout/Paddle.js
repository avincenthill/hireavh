// import utils from '../../utils/utils';

class Paddle {
  constructor(context) {
    this.context = context;

    this.color = this.context.paddleColor;
    this.width = this.context.paddleWidth;
    this.thickness = this.context.paddleThickness;
    this.dispY = this.context.paddleHeight;

    this.update();
  }

  update() {
    this.x = this.dispX - this.context.canvas.width / 2;
    this.y = -(this.dispY - this.context.canvas.height / 2);
  }
}

export default Paddle;
