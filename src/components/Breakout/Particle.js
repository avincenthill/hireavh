import utils from '../../utils/utils';

class Particle {
  constructor(id, context, options = {}) {
    this.id = id;
    this.context = context;

    this.radius = this.context.particleRadius;
    this.color = this.context.particleColor;
    this.x = utils.getRandomArbitrary(
      -this.context.particleStartingX,
      this.context.particleStartingX
    );
    this.y = utils.getRandomArbitrary(0, this.context.particleStartingY);
    this.vx = utils.getRandomArbitrary(
      -this.context.particleStartingVelocity,
      this.context.particleStartingVelocity
    );
    this.vy = utils.getRandomArbitrary(
      -this.context.particleStartingVelocity,
      this.context.particleStartingVelocity
    );
    this.gravity = this.context.gravity;
    this.drag = this.context.drag;
    this.health = this.context.particleStartingHealth;

    // overwrite properties with options specified at instantiation
    for (let option in options) {
      this[option] = options[option];
    }

    this.update();
  }

  update() {
    this.checkIfDead();

    // color
    if (!this.dontConditionallyColor) this.conditionallyColorOnHealth();

    // size
    if (!this.dontConditionallySize) this.conditionallySizeOnHealth();

    // apply forces
    this.applyGravity();
    this.applyDrag();

    this.translate();

    this.updateDispProps();
  }

  checkIfDead() {
    if (this.health <= 0) {
      this.context.deleteParticle(this);
    }
  }

  conditionallyColorOnHealth() {
    const colorHealthLookup = {
      '1': this.context.color3,
      '2': this.context.color2,
      '3': this.context.color1,
    };

    const healthColor = colorHealthLookup[this.health];
    if (healthColor) {
      this.color = healthColor;
    }
  }

  conditionallySizeOnHealth() {
    this.radius = 5 + this.health * 7;
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
    this.vy -= this.gravity;
  }

  applyDrag() {
    this.vy += this.vy > 0 ? -this.drag : this.drag;
    this.vx += this.vx > 0 ? -this.drag : this.drag;
  }
}

export default Particle;
