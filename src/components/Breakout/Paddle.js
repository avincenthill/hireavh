class Paddle {
  constructor(context) {
    this.context = context;

    this.color = this.context.paddleColor;
    this.width = this.context.paddleWidth;
    this.thickness = this.context.paddleThickness;
    this.dispY = this.context.paddleHeight;
    this.vx = 0;

    this.update();
  }

  update() {
    const prevX = this.x
    const newX = this.dispX - this.context.canvas.width / 2;

    this.vx = this.calculateV(prevX, newX);

    this.x = newX;
    this.y = -(this.dispY - this.context.canvas.height / 2);
  }

  calculateV(v1,v2) {
    return v2-v1;
  }
}

export default Paddle;
