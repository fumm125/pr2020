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
         <div className="Han">
          <img src={Hanpt} alt='Hanpt'/>
          <h2>한효승</h2>
         </div>
         <div className="Sung"></div>
      </div>
    </div>
  );
};

export default Member;