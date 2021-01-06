import React, { Component } from 'react';
import './components/Topnavi.scss';
import Topnavi from './components/Topnavi';
import Cover from './components/Cover';


const Feedback = () => {
  return (
    <div>
      <Topnavi></Topnavi>
      <Cover></Cover>
      <h1>피드백 테스트</h1>
    </div>
  );
};

export default Feedback;