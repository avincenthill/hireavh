import './Breakout.css';
import Ball from './Ball';
import { NavList } from 'components/Nav/Nav';
import Paddle from './Paddle';
import Page from 'components/Page/Page';
import Particle from './Particle';
import React from 'react';

// TBD: handle particle to particle collisions
// TBD: pull out game text strings
class Breakout extends React.Component {
  constructor(props) {
    super(props);
    // animation
    this.renderFrameDelayMs = 10;
    this.interval = null;

    // theme color
    this.white = '#F2D7BA';
    this.black = '#000000';
    this.color1 = '#230040';
    this.color2 = '#725AC1';
    this.color3 = '#FF5D00';

    // canvas
    this.canvas = null;
    this.canvasColor = this.black;
    this.ctx = null;
    this.canvasName = 'canvas';

    // physical contants
    this.gravity = 0;
    this.drag = 0.001;
    this.wallElasticity = 0.5;
    this.particleElasticity = 0.99;
    this.paddleElasticity = 0.75;

    // particles
    this.particles = [];
    this.numParticles = 50;

    // particle
    this.particleColor = this.color1;
    this.particleTextColor = this.white;
    this.particleRadius = 15;
    this.particleStartingVelocity = 3;
    this.particleStartingX = 200;
    this.particleStartingY = 200;
    this.particleStartingHealth = 3;
    this.particleTextFont = '20px Arial';

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
    this.paddle = this.createPaddle();

    for (let i = 0; i < this.numParticles; i += 1) {
      this.createParticle(i);
    }
  }

  createPaddle() {
    return new Paddle(this);
  }

  createParticle(id) {
    this.particles.push(new Particle(id, this, { gravity: -0.005 }));
  }

  createBall(id) {
    if (this.gameNumBalls) {
      this.ballInPlay = true;
      this.gameCenterText = '';
      this.gameNumBalls -= 1;
      this.particles.push(
        new Ball(id, this, {
          x: this.paddle.x,
          y: this.paddle.y,
          vx: 0,
          vy: 10,
          color: this.ballColor,
          dontConditionallyColor: true,
          dontConditionallySize: true,
          gravity: 0.05,
        })
      );
    }
  }

  updatePaddle = (e) => {
    const mouseX = e.clientX - this.canvas.getBoundingClientRect().left;
    this.paddle.dispX = mouseX;
    this.paddle.update();
  };

  deleteParticle(particle) {
    this.particles[particle.id] = null;
  }

  initCanvas = () => {
    this.canvas = this._getRefs(this.canvasName);
    if (this.canvas) {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.ctx = this.canvas.getContext('2d');
      this.paddleHeight = this.canvas.height * this.paddleHeightPercent;

      // start render loop
      this.interval = setInterval(() => {
        this.processGameFrame();
        this.renderCanvas();
      }, this.renderFrameDelayMs);
    }
  };

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

  // TBD: store paddle x velocity and impart some to ball on contact
  handleCollisionsWithPaddle(particle, paddle) {
    if (
      particle.y - particle.radius < paddle.y &&
      particle.y - particle.radius > paddle.y - paddle.thickness * 3 &&
      particle.x - particle.radius < paddle.x + paddle.width / 2 &&
      particle.x + particle.radius > paddle.x - paddle.width / 2
    ) {
      particle.vy =
        (Math.max(
          Math.abs(this.paddle.vx),
          this.particleStartingVelocity / 10
        ) +
          Math.abs(particle.vy)) *
        this.paddleElasticity;
      const dvx = Math.max(
        Math.abs(this.paddle.vx),
        this.particleStartingVelocity / 10
      );
      particle.vx += dvx * (this.paddle.vx >= 0 ? 1 : -1);
      particle.vx *= this.paddleElasticity;
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
    this.drawGameBallsText();
    this.drawGameCenterText();
    this.drawGameScoreText();
  }

  drawGameBallsText() {
    this.ctx.font = this.particleTextFont;
    this.ctx.fillStyle = this.particleTextColor;
    this.ctx.textAlign = 'right';
    this.ctx.fillText(
      `Balls: ${this.gameNumBalls}`,
      this.canvas.width * 0.98,
      this.canvas.height * 0.95
    );
  }

  drawGameCenterText() {
    this.ctx.font = this.particleTextFont;
    this.ctx.fillStyle = this.particleTextColor;
    this.ctx.textAlign = 'center';
    this.ctx.fillText(
      `${this.gameCenterText}`,
      this.canvas.width / 2,
      this.canvas.height * 0.95
    );
  }

  drawGameScoreText() {
    this.ctx.font = this.particleTextFont;
    this.ctx.fillStyle = this.particleTextColor;
    this.ctx.textAlign = 'left';
    this.ctx.fillText(
      `Score: ${this.gameScore}`,
      this.canvas.width * 0.02,
      this.canvas.height * 0.95
    );
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
    const { radius, color } = particle;
    this.ctx.beginPath();
    this.ctx.arc(particle.dispX, particle.dispY, radius, 0, 2 * Math.PI);
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
    this.ctx.font = this.particleTextFont;
    this.ctx.fillStyle = this.particleTextColor;
    this.ctx.textAlign = 'center';
    // slightly adjust text to center in particle
    this.ctx.fillText(text, particle.dispX - 0.5, particle.dispY + 7);
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Breakout;
