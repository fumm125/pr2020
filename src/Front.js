import React, { Component } from 'react';
import SidebarMb from './components/SidebarMb';
import Topnavi from './components/Topnavi';
import './components/Topnavi.scss';
import './components/SidebarMb.scss';
import './Front.scss';


const Front =  () => {
    return (
        <div>
            <Topnavi></Topnavi>
            <SidebarMb></SidebarMb>
            <div className="Frontct">

            </div>
        </div>
    );
};


export default Front;