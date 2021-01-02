import React, { Component } from 'react';
import './components/Topnavi.scss';
import Topnavi from './components/Topnavi';
import './Member.scss';
import Hanpt from './img/Han.jpg';


const Member = () => {
  return (
    <div>
      <Topnavi></Topnavi>
      <div className="memberct">
         <div className="no1">
          <img src={Hanpt} alt='Hanpt'/>
          <h2>한효승</h2>
          <div className="info">
            <ul>
              <li>Name&nbsp;:</li>
              <li>Age&nbsp;&nbsp;&nbsp;&nbsp;:</li>
              <li>Part&nbsp;&nbsp;&nbsp;&nbsp;:</li>
              <li>Email&nbsp;&nbsp;:</li>
            </ul>
            <ul>
              <li>한효승</li>
              <li>26</li>
              <li>Front-end</li>
              <li>gksgytmd19@naver.com</li>
            </ul>
          </div>
         </div>
         <div className="no2">
           <img src={Hanpt} alt='Hanpt'/>
           <h2>성일도</h2>
           <div className="info">
            <ul>
              <li>Name&nbsp;:</li>
              <li>Age&nbsp;&nbsp;&nbsp;&nbsp;:</li>
              <li>Part&nbsp;&nbsp;&nbsp;&nbsp;:</li>
              <li>Email&nbsp;&nbsp;:</li>
            </ul>
            <ul>
              <li>성일도</li>
              <li>1</li>
              <li>1</li>
              <li>@naver.com</li>
            </ul>
          </div>
         </div>
         <div className="no3">
           <img src={Hanpt} alt='Hanpt'/>
           <h2>이지후</h2>
           <div className="info">
            <ul>
              <li>Name&nbsp;:</li>
              <li>Age&nbsp;&nbsp;&nbsp;&nbsp;:</li>
              <li>Part&nbsp;&nbsp;&nbsp;&nbsp;:</li>
              <li>Email&nbsp;&nbsp;:</li>
            </ul>
            <ul>
              <li>이지후</li>
              <li>1</li>
              <li>1</li>
              <li>@naver.com</li>
            </ul>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Member;