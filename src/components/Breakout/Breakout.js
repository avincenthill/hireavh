import './Breakout.css';
import Ball from './Ball';
import { NavList } from 'components/Nav/Nav';
import Paddle from './Paddle';
import Page from 'components/Page/Page';
import Particle from './Particle';
import React from 'react';
import utils from '../../utils/utils';

// TBD: refactor to use content for static text data
class Breakout extends React.Component {
  constructor(props) {
    super(props);
    // animation
    this.renderFrameDelayMs = 10;
    this.interval = null;

    // theme color/font
    this.white = '#F2D7BA';
    this.black = '#000000';
    this.color1 = '#230040';
    this.color2 = '#725AC1';
    this.color3 = '#FF5D00';
    this.textColor = this.white;
    this.font = '20px Helvetica Neue';

    // canvas
    this.canvas = null;
    this.canvasName = 'canvas';
    this.ctx = null;
    this.canvasColor = this.black;

    // physical contants
    this.gravity = 0;
    this.drag = 0.001;
    this.wallElasticity = 0.5;
    this.particleElasticity = 0.99;
    this.paddleElasticity = 0.99;

    // particles
    this.particles = [];
    this.numStartingParticles = 50;
    this.numCurrParticles = 0;

    // particle
    this.particleColor = this.color1;
    this.particleRadius = 15;
    this.particleStartingVelocity = 3;
    this.particleStartingX = 200;
    this.particleStartingY = 200;
    this.particleStartingHealth = 3;

    // paddle
    this.paddle = null;
    this.paddleColor = this.white;
    this.paddleStartingX = 300;
    this.paddleWidth = 150;
    this.paddleThickness = 15;
    this.paddleHeightPercent = 0.85;

    // ball
    this.ballColor = this.white;
    this.ballInPlay = false;

    // game
    this.gameNumBalls = 3;
    this.gameScore = 0;
    this.gameCenterText = 'click to release a ball';
  }

  componentDidMount() {
    this.initCanvas();

    this.initGame();
  }

  _getRefs = (prop) => {
    return this.refs[prop];
  };

  _onMouseMove = (e) => {
    this.updatePaddle(e);
  };

  _onClick = () => {
    // TBD: implement mouse click io
    if (!this.ballInPlay) {
      this.createBall(this.particles.length);
    }
  };

  initGame() {
    this.startGameRenderLoop();

    // create paddle
    this.paddle = this.createPaddle();

    // create particles
    for (let i = 0; i < this.numStartingParticles; i += 1) {
      this.createParticle(i);
    }
  }

  createPaddle() {
    return new Paddle(this);
  }

  createParticle(id) {
    this.numCurrParticles += 1;

    const options = {
      radius: this.particleRadius,
      color: this.particleColor,
      x: utils.getRandomArbitrary(
        -this.particleStartingX,
        this.particleStartingX
      ),
      y: utils.getRandomArbitrary(0, this.particleStartingY),
      vx: utils.getRandomArbitrary(
        -this.particleStartingVelocity,
        this.particleStartingVelocity
      ),
      vy: utils.getRandomArbitrary(
        -this.particleStartingVelocity,
        this.particleStartingVelocity
      ),
      gravity: 0,
      drag: this.drag,
      health: this.particleStartingHealth,
    };

    this.particles.push(new Particle(id, this, options));
  }

  createBall(id) {
    this.numCurrParticles += 1;

    if (this.gameNumBalls) {
      this.ballInPlay = true;
      this.gameCenterText = '';
      this.gameNumBalls -= 1;

      const options = {
        radius: this.particleRadius,
        color: this.ballColor,
        x: this.paddle.x,
        y: this.paddle.y,
        vx: 0,
        vy: 10,
        gravity: 0.05,
        drag: 0,
        dontConditionallyColor: true,
        dontConditionallySize: true,
      };

      this.particles.push(new Ball(id, this, options));
    }
  }

  updatePaddle = (e) => {
    const mouseX = e.clientX - this.canvas.getBoundingClientRect().left;
    this.paddle.dispX = mouseX;
    this.paddle.update();
  };

  deleteParticle(particle) {
    this.particles[particle.id] = null;
    this.numCurrParticles -= 1;
  }

  initCanvas = () => {
    this.canvas = this._getRefs(this.canvasName);
    if (this.canvas) {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.ctx = this.canvas.getContext('2d');

      // TBD: refactor this paddle logic
      this.paddleHeight = this.canvas.height * this.paddleHeightPercent;
    }
  };

  startGameRenderLoop() {
    // start render loop
    this.interval = setInterval(() => {
      this.processGameFrame();
      this.renderCanvas();
    }, this.renderFrameDelayMs);
  }

  processGameFrame() {
    this.processParticles();
  }

  processParticles() {
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

  handleCollisionsWithOtherParticles(p1, otherParticles) {
    if (!p1) return;

    let p2;
    for (let i = 0; i < otherParticles.length; i += 1) {
      p2 = otherParticles[i];

      // can't collide with self
      if (!p2 || p1 === p2) continue;

      // check overlap
      let dx = Math.abs(p1.x - p2.x);
      let dy = Math.abs(p1.y - p2.y);
      let dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      let offset = dist - (p1.radius + p2.radius);
      if (offset < 0) {
        // check collisions with ball
        if (p1 instanceof Ball && !(p2 instanceof Ball)) {
          p2.health -= 1;
          this.gameScore += 1;
        }
        if (p2 instanceof Ball && !(p1 instanceof Ball)) {
          p1.health -= 1;
          this.gameScore += 1;
        }

        // TBD: represent pos and v with vector arrays
        // TBD: model collisions realistically with conservation of momentum
        // rather than what I'm doing now which is just
        // swap the velocities and dampen
        let tempVx = p1.vx;
        let tempVy = p1.vy;
        p1.vx = p2.vx * this.particleElasticity;
        p1.vy = p2.vy * this.particleElasticity;
        p2.vx = tempVx * this.particleElasticity;
        p2.vy = tempVy * this.particleElasticity;

        let angle = Math.atan(dy / dx);
        let offX = Math.cos(angle) * Math.abs(offset);
        let offY = Math.sin(angle) * Math.abs(offset);

        p1.x -= offX / 2;
        p1.y -= offY / 2;
        p2.x += offX / 2;
        p2.y += offY / 2;
      }
    }
  }

  handleCollisionsWithPaddle(particle, paddle) {
    if (
      particle.y - particle.radius < paddle.y &&
      particle.y - particle.radius > paddle.y - paddle.thickness * 3 &&
      particle.x - particle.radius < paddle.x + paddle.width / 2 &&
      particle.x + particle.radius > paddle.x - paddle.width / 2
    ) {
      particle.vy =
        (Math.max(
          Math.abs(this.paddle.v[0]),
          this.particleStartingVelocity / 10
        ) +
          Math.abs(particle.vy)) *
        this.paddleElasticity;
      const dvx = Math.max(
        Math.abs(this.paddle.v[0]),
        this.particleStartingVelocity / 10
      );
      particle.vx += dvx * (this.paddle.v[0] >= 0 ? 1 : -1);
      particle.vx *= this.paddleElasticity;
    }
  }

  handleCollisionsWithWalls(particle) {
    const xOverlap =
      Math.abs(Math.abs(particle.x) + particle.radius) -
      Math.abs(this.canvas.width / 2);
    const yOverlap =
      Math.abs(Math.abs(particle.y) + particle.radius) -
      Math.abs(this.canvas.height / 2);

    // with floor
    if (particle.y - particle.radius < -this.canvas.height / 2) {
      particle.y += yOverlap;
      particle.vy = Math.abs(particle.vy * this.wallElasticity);

      // delete ball on fall to floor
      if (particle instanceof Ball) {
        this.ballInPlay = false;
        this.deleteParticle(particle);
        if (!this.gameNumBalls) {
          this.gameCenterText = 'GAME OVER';
        } else {
          this.gameCenterText = 'click to release a ball';
        }
      }
    }

    // with ceiling
    if (particle.y + particle.radius > this.canvas.height / 2) {
      particle.y -= yOverlap;
      particle.vy = -Math.abs(particle.vy * this.wallElasticity);
    }

    // with right
    if (particle.x + particle.radius > this.canvas.width / 2) {
      particle.x -= xOverlap;
      particle.vx = -Math.abs(particle.vx * this.wallElasticity);
    }

    // with left
    if (particle.x - particle.radius < -this.canvas.width / 2) {
      particle.x += xOverlap;
      particle.vx = Math.abs(particle.vx * this.wallElasticity);
    }
  }

  renderCanvas() {
    // from lowest to highest z-index
    this.clearCanvas();
    this.drawGameText();
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

  drawGameText() {
    // right ball count
    this.drawCanvasText(
      `Balls: ${this.gameNumBalls}`,
      this.canvas.width * 0.98,
      this.canvas.height * 0.95,
      'right'
    );
    // center info
    this.drawCanvasText(
      `${this.gameCenterText}`,
      this.canvas.width / 2,
      this.canvas.height * 0.95,
      'center'
    );
    // left score count
    this.drawCanvasText(
      `Score: ${this.gameScore}`,
      this.canvas.width * 0.02,
      this.canvas.height * 0.95,
      'left'
    );
    // TBD: calc temp better
    // left temperature
    this.drawCanvasText(
      `Temp: ${
        Math.round(
          (1000 *
            this.particles.reduce((acc, curr) => {
              if (curr) {
                return (
                  acc + Math.sqrt(Math.pow(curr.vx, 2) + Math.pow(curr.vy, 2))
                );
              } else {
                return acc;
              }
            }, 0)) /
            this.numCurrParticles
        ) / 1000
      }`,
      this.canvas.width * 0.02,
      this.canvas.height * 0.05,
      'left'
    );
  }

  drawCanvasText(text, width, height, alignment = 'center') {
    this.ctx.font = this.font;
    this.ctx.fillStyle = this.textColor;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, width, height);
  }

  drawPaddle(paddle) {
    this.ctx.beginPath();
    this.ctx.rect(
      paddle.dispX - paddle.width / 2,
      paddle.dispY,
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
    // convert coordinate system
    const dispX = particle.x + this.canvas.width / 2;
    const dispY = -particle.y + this.canvas.height / 2;

    const { radius, color } = particle;
    this.ctx.beginPath();
    this.ctx.arc(dispX, dispY, radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();

    // TBD: optionally enable stroke display
    // this.ctx.strokeStyle = color;
    // this.ctx.stroke();

    this.ctx.closePath();

    // TBD: enable to write to particles
    if (!(particle instanceof Ball)) {
      this.drawParticleText(particle, Math.round(particle.health));
    }
  }

  drawParticleText(particle, text) {
    const dispX = particle.x + this.canvas.width / 2;
    const dispY = -particle.y + this.canvas.height / 2;

    this.ctx.font = this.font;
    this.ctx.fillStyle = this.textColor;
    this.ctx.textAlign = 'center';
    // slightly adjust text to center in particle
    this.ctx.fillText(text, dispX - 0.5, dispY + 7);
  }

  render() {
    return (
      <Page>
        <h3 className="mobile-disclaimer">
          Sorry, this game is best played on desktop screen widths!
        </h3>
        <canvas
          className={this.canvasName}
          ref={this.canvasName}
          onMouseMove={this._onMouseMove}
          onClick={this._onClick}
        ></canvas>
        <br />
        <NavList></NavList>
        <hr></hr>
      </Page>
    );
  }
}

export default Breakout;
