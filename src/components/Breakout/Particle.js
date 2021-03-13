// TBD: represent pos and v with vector arrays
class Particle {
  constructor(id, context, options = {}) {
    this.id = id;
    this.context = context;

    Object.assign(this, options);

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

    this.color = colorHealthLookup[this.health] || this.color;
  }

  conditionallySizeOnHealth() {
    this.radius = 5 + this.health * 7;
  }

  applyGravity() {
    this.vy -= this.gravity;
  }

  applyDrag() {
    this.vy += this.vy > 0 ? -this.drag : this.drag;
    this.vx += this.vx > 0 ? -this.drag : this.drag;
  }

  translate() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default Particle;
