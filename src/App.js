import React, { Component } from 'react';
import logo from './logo.svg';
import HeadInfo from './block/Intro-head';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getLen} from './util/getLength'

import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '',
        studentId: '',
        joinCourse: 0,
        qq: '',
        grade: {
          c: 0,
          java: 0,
          dataBase: 0,
        },
      },
      classCount: {
        totalCount: 0,
        maleCount: 0,
        femaleCount: 0,
        area: {
          hubei: 0,
          unlocal: 0
        }
      },
      course: {
        list:[]
      },
    };
    axios.get('data.json').then(( res ) => {
      res = res.data;
      let {name, studentId, grade} = res.person;
      let {totalCount, maleCount, femaleCount, area} = res.classCount;
      let {list} = res.course;
      this.setState({
        person: {
          joinCourse: getLen(grade),
          name,
          studentId,
          c: grade.c,
          java: grade.java,
          dataBase: grade.dataBase,
        },
        classCount: {
          totalCount,
          maleCount,
          femaleCount,
          area: {
            hubei: area.hubei,
            unlocal: (function(){
              let num = 0;
              Object.values(area).forEach( n => num += n);
              return num;
            }())
          }
        },
        course: {
          list,
        }, 
      });
    }).catch(( err ) => {
      console.log( err );
    });
  }
  
  render() {

    let createList = this.state.course.list.map((val, index) => 
      <li key={index}>{val}</li>
    );


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
              <div className="head-info">
                <p>姓名:{this.state.person.name}</p>
                <p>学号:{this.state.person.studentId}</p>
                <p>参加课程:{this.state.person.joinCourse}</p>
                <p>c语言成绩:{this.state.person.c}</p>
                <p>java成绩:{this.state.person.java}</p>
                <p>数据库成绩:{this.state.person.dataBase}</p>
              </div>
            </HeadInfo>
            <HeadInfo index={2}>
              <i className="icon icon-member"></i>
              <Link to="/member">查看班级成员</Link>
              <div className="head-info">
                <p>总人数:{this.state.classCount.totalCount}</p>
                <p>男生人数:{this.state.classCount.maleCount}</p>
                <p>女生人数:{this.state.classCount.femaleCount}</p>
                <p>本地人数:{this.state.classCount.area.hubei}</p>
                <p>外地人数:{this.state.classCount.area.unlocal}</p>
              </div>
            </HeadInfo>
            <HeadInfo index={3}>
              <i className="icon icon-course"></i>  
              <Link to="/course">查看已开课程</Link>
              <div className="head-info">
                <p>课程列表:</p>
                 <ul>                                   
                  {createList}
                 </ul> 
              </div>
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
