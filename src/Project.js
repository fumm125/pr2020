import React, { Component } from 'react';
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
      </div>
    </div>
  );
};

export default Project;