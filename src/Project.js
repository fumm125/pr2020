import React, { Component, useEffect, useRef } from 'react';
import './components/Topnavi.scss';
import Topnavi from './components/Topnavi';
import './Project.scss';
import SidebarMb from './components/SidebarMb';
import './components/SidebarMb.scss'
import Cover from './components/Cover';





const Project = () => {
  return (
    <div>
      <Topnavi></Topnavi>
      <Cover></Cover>
      <div className="projectct">
        <SidebarMb></SidebarMb>
        <div className="prtext">
          <b1>Our</b1>
          <br></br>
          <b2>Skills.</b2>
        </div>
      </div>
    </div>
  );
};

export default Project;