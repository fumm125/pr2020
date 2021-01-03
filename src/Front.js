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
                <h1>프론트엔드 부분 영역</h1>
            </div>
        </div>
    );
};


export default Front;