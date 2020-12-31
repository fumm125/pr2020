import React, { Component } from 'react';
import './components/Topnavi.scss';
import Topnavi from './components/Topnavi';


const Project = () => {
  return (
    <div>
      <Topnavi></Topnavi>
      <div className="projectct">
        <div className="sidebar">
          <span className="1">Front-end</span>
          <span className="2">Back-end</span>
        </div>
      </div>
    </div>
  );
};

export default Project;