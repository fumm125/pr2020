import React, { Component } from 'react';
import './components/Topnavi.scss';
import Topnavi from './components/Topnavi';
import { Link } from 'react-router-dom';
import './Project.scss';


const Project = () => {
  return (
    <div>
      <Topnavi></Topnavi>
      <div className="projectct">
        <div className="sidebar">
          <Link to="/Front" className="frontbr">Front-end</Link>
          <Link to="/Back" className="backbr">Back-end</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;