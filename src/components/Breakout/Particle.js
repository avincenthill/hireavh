import utils from '../../utils/utils';

class Particle {
  constructor(id, context, gravity) {
    this.id = id;
    this.context = context;

    this.maxX = this.context.particleStartingX;
    this.maxY = this.context.particleStartingY;
    this.x = utils.getRandomArbitrary(-this.maxX, this.maxX);
    this.y = utils.getRandomArbitrary(-this.maxY, this.maxY);
    this.radius = this.context.particleRadius;
    this.color = this.context.particleColor;
    this.vx = utils.getRandomArbitrary(
      -this.context.particleVelocity,
      this.context.particleVelocity
    );
    this.vy = utils.getRandomArbitrary(
      -this.context.particleVelocity,
      this.context.particleVelocity
    );
    this.g = gravity || this.context.gravity;
    this.mu = this.context.drag;
    this.health = this.context.particleStartingHealth;

    this.update();
  }

  update() {
    this.checkIfDead();

    // apply forces
    this.applyGravity();
    this.applyDrag();

    this.translate();

    this.updateDispProps();
  }

  checkIfDead() {
    if (this.health <= 0) {
      this.context.deleteParticle(this.id);
    }
  }

  translate() {
    this.x += this.vx;
    this.y += this.vy;
  }

  updateDispProps() {
    this.dispX = this.x + this.context.canvas.width / 2;
    this.dispY = -this.y + this.context.canvas.height / 2;
  }

  applyGravity() {
    this.vy -= this.g;
  }

  applyDrag() {
    this.vy += this.vy > 0 ? -this.mu : this.mu;
    this.vx += this.vx > 0 ? -this.mu : this.mu;
  }
}

export default Particle;
