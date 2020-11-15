import './Todo.css';
import {
  FaBroom,
  FaCheckCircle,
  FaGlassCheers,
  FaRunning,
  FaTooth,
  FaUserFriends,
} from 'react-icons/fa';
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import Page from 'components/Page/Page';
// import content from 'content/content'; // TBD pull out page content
import styleconfig from 'styles/styleconfig';
import utils from 'utils/utils';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    function datesAreOnSameDay(first, second) {
      return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
      );
    }

    const todoInfoArr = [
      {
        title: 'EXERCISE',
        icon: <FaRunning />,
      },
      {
        title: 'CLEAN APT',
        icon: <FaBroom />,
      },
      {
        title: 'WASH DISHES',
        icon: <FaGlassCheers />,
      },
      {
        title: 'REACH OUT',
        icon: <FaUserFriends />,
      },
      {
        title: 'NIGHT HYGIENE',
        icon: <FaTooth />,
      },
    ];
    this.state = {
      todoInfoArr,
    };

    const lastSeen = JSON.parse(localStorage.getItem('lastSeen'));
    if (!lastSeen || !datesAreOnSameDay(new Date(lastSeen), new Date())) {
      // clear data and reset seen date
      localStorage.setItem('lastSeen', JSON.stringify(new Date()));
      this.resetTodoArr();
    }

    let todoArr = JSON.parse(localStorage.getItem('todoArr'));
    if (!todoArr || todoArr.length !== todoInfoArr.length) {
      this.resetTodoArr();
    }
  }

  handleResetClick = () => {
    this.playResetSound();
    this.resetTodoArr();
  }

  resetTodoArr = () => {
    const todoArr = Array(this.state.todoInfoArr.length).fill(false);
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    this.forceUpdate();
  };

  handleClick = (e) => {
    const todoArr = JSON.parse(localStorage.getItem('todoArr'));
    const id = parseInt(e.target.id, 10);
    const newBool = !todoArr[id];
    todoArr[id] = newBool;

    // play appropriate sounds based on state
    this.playSound(newBool, todoArr);
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    this.forceUpdate();
  };

  playSound = (selectedBool, todoArrBool) => {
    const areSomeFalse = todoArrBool.some((element) => {
      return !element;
    });
    if (areSomeFalse) {
      if (selectedBool) {
        this.playCheckSound();
      } else {
        this.playResetSound();
      }
    } else {
      this.playSuccessSound();
    }
  };

  playResetSound = () => {
    // eslint-disable-next-line
    console.log('reset');
  };

  playSuccessSound = () => {
    // eslint-disable-next-line
    console.log('success');
  };

  playCheckSound = () => {
    // eslint-disable-next-line
    console.log('check');
  };

  renderArrayOfTodos() {
    const todoArr = JSON.parse(localStorage.getItem('todoArr'));

    return todoArr.map((todoBool, index) => {
      return (
        <button
          id={index}
          key={index}
          onClick={this.handleClick}
          className={`todo button-hover-light todo-${todoBool}`}
        >
          <span className="todo-icon">
            {!todoBool ? this.state.todoInfoArr[index].icon : (<FaCheckCircle />)}
          </span>
          <span className="todo-item">
            {this.state.todoInfoArr[index].title}
          </span>
        </button>
      );
    });
  }

  renderConfetti() {
    const todoArr = JSON.parse(localStorage.getItem('todoArr'));
    if (
      todoArr.some((element) => {
        return !element;
      })
    ) {
      return null;
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // maximum is exclusive and the minimum is inclusive
    }

    return (
      <div className="container">
        {Array(10)
          .fill(true)
          .map((el, index) => {
            let randDist = getRandomInt(-5, 6);
            let randTime = getRandomInt(-5, 1) * Math.random() - 0.5;
            return (
              <div
                className="confetti"
                key={index}
                style={{
                  '--noise-dist': `${randDist}vmin`,
                  '--noise-time': `${randTime}s`,
                }}
              ></div>
            );
          })}
      </div>
    );
  }

  render() {
    return (
      <div className="todo-container">
        <Page>
          <IconContext.Provider
            value={{
              style: {
                ...styleconfig.icons.m,
                ...utils.getIconStyles('todo'),
              },
            }}
            >
            <h3 className="todo-title">{new Date().toDateString()}</h3>
            {this.renderConfetti()}
            {this.props ? this.renderArrayOfTodos() : null}
            <button
              id="2"
              className="todo todo-reset button-hover-light todo-resetBtn"
              onClick={this.handleResetClick}
            >
              <span className="todo-item-reset">RESET</span>
            </button>
          </IconContext.Provider>
        </Page>
      </div>
    );
  }
}
