import React, { Component } from 'react';
import SidebarMb from './components/SidebarMb';
import Topnavi from './components/Topnavi';
import Cover from './components/Cover';
import './components/Topnavi.scss';
import './components/SidebarMb.scss';
import './Front.scss';
import fsec1img from './img/react.png';


const Front =  () => {
    
    return (
        <div>
            <Topnavi></Topnavi>
            <Cover></Cover>
            <SidebarMb></SidebarMb>
            <div className="Frontct">
                <h1>
                    <span>프론트엔드 부분 영역</span> 
                </h1>
                <ol>
                    <li className="fsec1">
                    <div className="imgsec">
                        <img src={fsec1img} alt='fsec1img'/>
                    </div>
                    <div className="textsec">
                        <h1>REACT</h1> 
                    </div>
                </li>
                <li className="fsec2">

                </li>
                <li className="fsec3">

                </li>
                <li className="fsec4">

                </li>
                </ol>
            </div>
        </div>
    );
};


export default Front;