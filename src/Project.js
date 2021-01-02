import React, { Component } from 'react';
import './components/Topnavi.scss';
import Topnavi from './components/Topnavi';
import './Project.scss';
import SidebarMb from './components/SidebarMb';
import './components/SidebarMb.scss'


const Project = () => {
  return (
    <div>
      <Topnavi></Topnavi>
      <div className="projectct">
        <SidebarMb></SidebarMb>
      </div>
    </div>
  );
};

export default Project;