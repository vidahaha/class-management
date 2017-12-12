import React, { Component } from 'react';
import logo from './logo.svg';
import HeadInfo from './block/Intro-head';
import { Link } from 'react-router-dom';

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
            <HeadInfo index={1}>
              <i className="icon icon-home"></i>
              <Link to="/person">查看个人信息</Link>
            </HeadInfo>
            <HeadInfo index={2}>
              <i className="icon icon-member"></i>
              <Link to="/member">查看班级成员</Link>
            </HeadInfo>
            <HeadInfo index={3}>
              <i className="icon icon-course"></i>  
              <Link to="/course">查看已开课程</Link>
            </HeadInfo>
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
