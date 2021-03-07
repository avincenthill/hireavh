import './Breakout.css';
import { NavList } from 'components/Nav/Nav';
import Paddle from './Paddle';
import Page from 'components/Page/Page';
import Particle from './Particle';
import React from 'react';
// import utils from '../../utils/utils';
// import content from "content/content";

// TBD: handle particle to particle collisions
// TBD: improve particle to paddle collisions
// TBD: implement game logic for breakout
// TBD: implement content project link

class Breakout extends React.Component {
  constructor(props) {
    super(props);
    this.renderFrameDelayMs = 10;
    this.interval = null;
    this.canvas = null;
    this.canvasColor = 'black';
    this.ctx = null;

    // physical contants
    this.gravity = 0.05;
    this.drag = 0.001;
    this.wallElasticity = 0.99;
    this.particleElasticity = 0.99;
    this.paddleElasticity = 0.99;

    this.particleColor = 'red';
    this.particles = [];
    this.numParticles = 20;
    this.particleRadius = 20;
    this.particleVelocity = 4;
    this.particleStartingX = 0;
    this.particleStartingY = 0;
    this.particleStartingHealth = 10;
    this.particleTextColor = 'white';
    this.particleTextFont = '20px Arial';
    this.paddle = null;
    this.paddleColor = 'white';
    this.paddleStartingX = 300;
    this.paddleWidth = 100;
    this.paddleThickness = 10;
    this.paddleHeight = 0;
  }

  componentDidMount() {
    this.initCanvas();
    this.initGame();
  }

  _onMouseMove = (e) => {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    this.updatePaddle(x);
  };

  _onClick = (e) => {
    this.particles.push(
      new Particle(this.particles.length, this, this.particles.length / 100)
    );
  };

  initGame() {
    this.paddle = this.createPaddle();
  }

  createPaddle() {
    return new Paddle(this);
  }

  updatePaddle(x) {
    this.paddle.dispX = x;
    this.paddle.updateDispProps();
  }

  deleteParticle(id) {
    this.particles[id] = null;
  }

  getRefs = (prop) => {
    return this.refs[prop];
  };

  initCanvas = () => {
    // get ref and context of canvas
    this.canvas = this.getRefs('canvas');
    if (this.canvas) {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.ctx = this.canvas.getContext('2d');

      // start render loop
      this.interval = setInterval(() => {
        this.processGameFrame();
        this.renderCanvas();
      }, this.renderFrameDelayMs);
    }
  };

  processGameFrame() {
    this.particles.forEach((particle) => {
      if (particle) {
        particle.update();
        this.handleCollisions(particle);
      }
    });
  }

  handleCollisions(particle) {
    this.handleCollisionsWithWalls(particle);
    this.handleCollisionsWithPaddle(particle, this.paddle);
    this.handleCollisionsWithOtherParticles(particle, this.particles);
  }

  handleCollisionsWithOtherParticles(particle, otherParticles) {
    if (!particle) return;

    let otherParticle;
    for (let i = 0; i < otherParticles.length; i += 1) {
      otherParticle = otherParticles[i];

      // can't collide with self
      if (!otherParticle || particle === otherParticle) continue;

      // check overlap
      let dx = Math.abs(particle.x - otherParticle.x);
      let dy = Math.abs(particle.y - otherParticle.y);
      if (
        Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) <
        particle.radius + otherParticle.radius
      ) {
        // swap velocities
        let tempVx = particle.vx;
        let tempVy = particle.vy;
        particle.vx = otherParticle.vx * this.particleElasticity;
        particle.vy = otherParticle.vy * this.particleElasticity;
        otherParticle.vx = tempVx * this.particleElasticity;
        otherParticle.vy = tempVy * this.particleElasticity;

        // TBD: do trig and offset both particles
      }
    }
  }

  // TBD: clean up hardcoded constants
  handleCollisionsWithPaddle(particle, paddle) {
    let overlap;
    if (
      particle.y - particle.radius < -(-40 + this.canvas.height * 0.9) / 2 &&
      particle.x < paddle.x + 50 &&
      particle.x > paddle.x - 50
    ) {
      overlap =
        Math.abs(Math.abs(particle.y) + particle.radius) -
        Math.abs((-40 + this.canvas.height * 0.9) / 2);
      particle.vy = Math.abs(particle.vy * this.paddleElasticity);
    }
  }

  handleCollisionsWithWalls(particle) {
    let overlap;

    // with floor
    if (particle.y - particle.radius < -this.canvas.height / 2) {
      overlap =
        Math.abs(Math.abs(particle.y) + particle.radius) -
        Math.abs(this.canvas.height / 2);
      particle.y += overlap;
      particle.vy = Math.abs(particle.vy * this.wallElasticity);
    }

    // with ceiling
    if (particle.y + particle.radius > this.canvas.height / 2) {
      overlap =
        Math.abs(Math.abs(particle.y) + particle.radius) -
        Math.abs(this.canvas.height / 2);
      particle.y -= overlap;
      particle.vy = -Math.abs(particle.vy * this.wallElasticity);
    }

    // with right
    if (particle.x + particle.radius > this.canvas.width / 2) {
      overlap =
        Math.abs(Math.abs(particle.x) + particle.radius) -
        Math.abs(this.canvas.width / 2);
      particle.x -= overlap;
      particle.vx = -Math.abs(particle.vx * this.wallElasticity);
    }

    // with left
    if (particle.x - particle.radius < -this.canvas.width / 2) {
      overlap =
        Math.abs(Math.abs(particle.x) + particle.radius) -
        Math.abs(this.canvas.width / 2);
      particle.x += overlap;
      particle.vx = Math.abs(particle.vx * this.wallElasticity);
    }
  }

  renderCanvas() {
    this.clearCanvas();
    this.drawParticles();
    this.drawPaddle(this.paddle);
  }

  clearCanvas() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.canvasColor;
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPaddle(paddle) {
    this.ctx.beginPath();
    this.ctx.rect(
      paddle.dispX - paddle.width / 2,
      this.canvas.height * 0.9,
      paddle.width,
      paddle.thickness
    );
    this.ctx.fillStyle = paddle.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawParticles() {
    this.particles.forEach((particle) => {
      if (particle) this.drawParticle(particle);
    });
  }

  drawParticle(particle) {
    const { radius, color } = particle;
    this.ctx.beginPath();
    this.ctx.arc(particle.dispX, particle.dispY, radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
    // this.drawParticleText(particle, particle.health);
  }

  drawParticleText(particle, text) {
    this.ctx.font = this.particleTextFont;
    this.ctx.fillStyle = this.particleTextColor;
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, particle.dispX - 0.5, particle.dispY + 7);
  }

  render() {
    return (
      <div>
        <Page>
          <canvas
            className="canvas"
            ref="canvas"
            onMouseMove={this._onMouseMove}
            onClick={this._onClick}
          ></canvas>
          <br />
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default Breakout;
