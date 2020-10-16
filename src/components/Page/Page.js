import './Page.css';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="page-container">{this.props.children}</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Page;
