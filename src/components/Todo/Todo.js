import './Todo.css';
import {
  FaBroom,
  FaCheckCircle,
  FaGlassCheers,
  FaRunning,
  FaTooth,
  FaTrophy,
  FaUserFriends,
} from 'react-icons/fa';
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import Page from 'components/Page/Page';
import checkSound from 'assets/sounds/check.mp3';
// import content from 'content/content'; // TBD pull out page content
import resetSound from 'assets/sounds/reset.mp3';
import styleconfig from 'styles/styleconfig';
import successSound from 'assets/sounds/success.mp3';
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

    // TBD: add condition tasks based on day of week
    const todoTaskArray = [
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
      todoTaskArray,
    };

    const lastSeen = JSON.parse(localStorage.getItem('lastSeen'));
    if (!lastSeen || !datesAreOnSameDay(new Date(lastSeen), new Date())) {
      // clear data and reset seen date
      localStorage.setItem('lastSeen', JSON.stringify(new Date()));
      this.resetTodoArr();
    }

    let todoArr = JSON.parse(localStorage.getItem('todoArr'));
    if (!todoArr || todoArr.length !== todoTaskArray.length) {
      this.resetTodoArr();
    }
  }

  handleResetClick = () => {
    this.playResetSound();
    this.resetTodoArr();
  };

  resetTodoArr = () => {
    const todoArr = Array(this.state.todoTaskArray.length).fill(false);
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    this.forceUpdate();
  };

  handleClick = (e) => {
    const todoArr = JSON.parse(localStorage.getItem('todoArr'));
    const id = parseInt(e.target.id, 10);
    const newBool = !todoArr[id];
    todoArr[id] = newBool;

    // play appropriate sounds based on state
    this.pickAndPlaySound(newBool, todoArr);
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    this.forceUpdate();
  };

  pickAndPlaySound = (selectedBool, todoArrBool) => {
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

  playSound = (soundElClass, volume) => {
    const audioEl = document.getElementsByClassName(soundElClass)[0];
    audioEl.volume = volume;
    audioEl.currentTime = 0;
    audioEl.play();
  };

  playResetSound = () => {
    this.playSound('resetSound', 0.1);
  };

  playSuccessSound = () => {
    this.playSound('successSound', 0.6);
  };

  playCheckSound = () => {
    this.playSound('checkSound', 0.5);
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
            {!todoBool ? this.state.todoTaskArray[index].icon : <FaCheckCircle />}
          </span>
          <span className="todo-item">
            {this.state.todoTaskArray[index].title}
          </span>
        </button>
      );
    });
  }

  render() {
    const todoArr = JSON.parse(localStorage.getItem('todoArr'));
    const areSomeFalse = todoArr.some((element) => {
      return !element;
    });

    return (
      <div className="todo-container">
        <Page>
          <IconContext.Provider
            value={{
              style: {
                ...styleconfig.icons.l,
                ...utils.getIconStyles('todo'),
              },
            }}
          >
            {!areSomeFalse ? (
                <FaTrophy />
            ) : null}
            <h3 className="todo-title">{new Date().toDateString()}</h3>
            {this.props ? this.renderArrayOfTodos() : null}
            <button
              id="2"
              className="todo todo-reset button-hover-light todo-resetBtn"
              onClick={this.handleResetClick}
            >
              <span className="todo-item-reset">RESET</span>
              <audio className="checkSound">
                <source src={checkSound}></source>
              </audio>
              <audio className="successSound">
                <source src={successSound}></source>
              </audio>
              <audio className="resetSound">
                <source src={resetSound}></source>
              </audio>
            </button>
          </IconContext.Provider>
        </Page>
      </div>
    );
  }
}
