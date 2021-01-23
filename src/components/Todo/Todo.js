import './Todo.css';
import {
  FaBookOpen,
  FaBroom,
  FaCheckCircle,
  FaCode,
  FaGlassCheers,
  FaHandPaper,
  FaMailBulk,
  FaPills,
  FaRunning,
  FaTooth,
  FaTrophy,
  FaTshirt,
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
        title: 'LEETCODE',
        icon: <FaCode />,
      },
      {
        title: 'EMAIL',
        icon: <FaMailBulk />,
      },
      {
        title: 'STUDY',
        icon: <FaBookOpen />,
      },
      {
        title: 'CLEAN APT',
        icon: <FaBroom />,
      },
      {
        title: 'DO DISHES',
        icon: <FaGlassCheers />,
      },
      {
        title: 'REACH OUT',
        icon: <FaUserFriends />,
      },
      {
        title: 'GET REJECTED',
        icon: <FaHandPaper />,
      },
      {
        title: 'TAKE MULTIVITAMIN',
        icon: <FaPills />,
      },
      {
        title: 'PREP TOMORROW',
        icon: <FaTshirt />,
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

    let todoArr = this.getTodoArr();
    if (!todoArr || todoArr.length !== todoTaskArray.length) {
      this.resetTodoArr();
    }
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  getTodoArr = () => {
    return JSON.parse(localStorage.getItem('todoArr'));
  };

  handleResetClick = () => {
    this.playResetSound();
    this.resetTodoArr();
  };

  resetTodoArr = () => {
    const todoArr = Array(this.state.todoTaskArray.length).fill(false);
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    if (this._mounted) this.forceUpdate();
  };

  handleClick = (e) => {
    const todoArr = this.getTodoArr();
    const id = parseInt(e.target.id, 10);
    const newBool = !todoArr[id];
    todoArr[id] = newBool;
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    if (this._mounted) this.forceUpdate();
    this.handleTodoListState(newBool, todoArr);
  };

  handleTodoListState = (selectedBool, todoArrBool) => {
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
      this.playCheckSound();
      this.animateSuccess();
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

  animateSuccess = async () => {
    const todoArr = this.getTodoArr();
    const todoArrLen = todoArr.length;
    const delay = 50;

    for (let i = 0; i < todoArrLen; i += 1) {
      todoArr[i] = false;
      localStorage.setItem('todoArr', JSON.stringify(todoArr));
      if (this._mounted) this.forceUpdate();
      await utils.sleep(delay);
    }

    for (let i = 0; i < todoArrLen; i += 1) {
      todoArr[i] = true;
      localStorage.setItem('todoArr', JSON.stringify(todoArr));
      if (this._mounted) this.forceUpdate();
      await utils.sleep(delay);
    }

    this.playSuccessSound();
  };

  renderArrayOfTodos() {
    const todoArr = this.getTodoArr();

    return todoArr.map((todoBool, index) => {
      return (
        <button
          id={index}
          key={index}
          onClick={this.handleClick}
          className={`todo button-hover-light todo-${todoBool}`}
        >
          <span className="todo-icon">
            {!todoBool ? (
              this.state.todoTaskArray[index].icon
            ) : (
              <FaCheckCircle />
            )}
          </span>
          <span className="todo-item">
            {this.state.todoTaskArray[index].title}
          </span>
        </button>
      );
    });
  }

  render() {
    const todoArr = this.getTodoArr();
    const areSomeFalse = todoArr.some((element) => {
      return !element;
    });

    return (
      <div className="todolist-container">
        <Page>
          <IconContext.Provider
            value={{
              style: {
                ...styleconfig.icons.l,
                ...utils.getIconStyles('todo'),
              },
            }}
          >
            <h3 className="todo-title">{new Date().toDateString()}</h3>
            {this.props ? (
              <div className="todo-container">{this.renderArrayOfTodos()}</div>
            ) : null}
            {!areSomeFalse ? (
              <span className="todo-trophy">
                <IconContext.Provider
                  value={{
                    style: {
                      ...styleconfig.icons.xl,
                    },
                  }}
                >
                  <FaTrophy />
                </IconContext.Provider>
              </span>
            ) : null}
            <button
              id="2"
              className="todo todo-reset button-hover-light todo-reset-btn"
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
            <h3 className="todo-title todo-bottom-date">
              {new Date().toDateString()}
            </h3>
          </IconContext.Provider>
        </Page>
      </div>
    );
  }
}
