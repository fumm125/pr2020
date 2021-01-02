import React, { Component } from 'react';
import SidebarMb from './components/SidebarMb';
import Topnavi from './components/Topnavi';
import './components/Topnavi.scss';
import './components/SidebarMb.scss';



const Back =  () => {
    return (
        <div>
            <Topnavi></Topnavi>
            <SidebarMb></SidebarMb>
        </div>
    );
};


export default Back;