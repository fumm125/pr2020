import React, { Component } from 'react';
import SidebarMb from './components/SidebarMb';
import Topnavi from './components/Topnavi';
import './components/Topnavi.scss';
import './components/SidebarMb.scss';
import './Back.scss';



const Back =  () => {
    return (
        <div>
            <Topnavi></Topnavi>
            <SidebarMb></SidebarMb>
            <div className="Backct">
                <h1>백엔드 부분 영역</h1>
            </div>
        </div>
    );
};


export default Back;