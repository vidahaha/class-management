import React, { Component } from 'react';
import logo from './logo.svg';
import HeadInfo from './block/Intro-head';

import './css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">班级管理系统</h1>
          <a className="App-login">请登录</a>
        </header>
        <div className="App-intro">
          <div className="intro-head">
            <HeadInfo></HeadInfo>
            <div className="head-info-2" onClick={this.largerImg}>
            查看班级成员
            </div>
            <div className="head-info-3" onClick={this.largerImg}>
            查看已开课程
            </div>
         </div>
          <div className="intro-main">

          </div>
        </div>
        <footer className="App-footer">
          vidahaha
        </footer>
      </div>
    );
  }
}

export default App;
