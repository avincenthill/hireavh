import './Link.css';
import React from 'react';

class Link extends React.Component {
  render() {
    return (
      <div>
        <h2 className="link">
          <a className="link-a" href={this.props.path}>
            <span>{this.props.title}</span>
          </a>
        </h2>
      </div>
    );
  }
}

export default Link;
