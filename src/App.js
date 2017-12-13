import React, { Component } from 'react';
import logo from './logo.svg';
import HeadInfo from './block/Intro-head';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    axios.get('data.json').then(( res ) => {
      console.log( res );
    }).catch(( err ) => {
      console.log( err );
    });
  }
  
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
            <div className="main-info">
              <h3>介绍</h3>
              <i className="app-back-1"></i>
              <p>此系统使用React + JavaBean + Servlet实现对一班、二班学生
                信息数据库的集成。达到在不修改后台数据库访问代码的前提下，前
                台界面通过不同的账号登录进入系统后，可查询对应的相关学生信息
                的效果。
              </p>
            </div>
            <div className="main-support">
              <h3>介绍</h3>
              <i className="app-back-1"></i>
              <p>此系统使用React + JavaBean + Servlet实现对一班、二班学生
                信息数据库的集成。达到在不修改后台数据库访问代码的前提下，前
                台界面通过不同的账号登录进入系统后，可查询对应的相关学生信息
                的效果。
              </p>
            </div>

          </div>
        </div>
        <footer className="App-footer">
          <img className="footer-img" src="/app_2.png" alt="logo"/>
          <p>计科1503黄穗宇   个人博客:
            <a href="https://vidahaha.github.io">https://vidahaha.github.io</a>
          </p>
        </footer>
      </div>
    );
  }

}

export default App;
