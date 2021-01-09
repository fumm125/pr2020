import React, { Component } from 'react';
import SidebarMb from './components/SidebarMb';
import Topnavi from './components/Topnavi';
import Cover from './components/Cover';
import './components/Topnavi.scss';
import './components/SidebarMb.scss';
import './Back.scss';
import bsec1img from './img/spring.png';
import bsec2img from './img/lombok.png';



const Back =  () => {
    return (
        <div>
            <Topnavi></Topnavi>
            <Cover></Cover>
            <SidebarMb></SidebarMb>
            <div className="Backct">
                <h1 className="Toptext">
                    <span>백엔드 부분 영역</span>
                </h1>
                <ol className="Backinfo">
                    <li>
                        <div className="imgsec">
                            <img src={bsec1img} alt='bsec1img'/>
                        </div>
                        <div className="textsec">
                            <h1>React</h1>
                            <p>모든 페이지는 리액트를 이용하여 제작하였습니다.
                            <br></br>
                            <br></br>
                            이미 수많은 기업과 개발자들이 채용한 라이브러리인 React를 직접 부딪혀 다뤄보며 익혔습니다.
                            <br></br>
                            <br></br>
                            리액트의 핵심이라 할 수 있는 컴포넌트를 이해하고 있으며 JSX에 대한 기초적인 이해와 사용이 가능합니다.
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="imgsec">
                            <img src={bsec2img} alt='bsec2img'/>
                        </div>
                        <div className="textsec">
                            <h1>HTML5&nbsp;&nbsp;&nbsp;&nbsp;
                                CSS&nbsp;&nbsp;&nbsp;&nbsp;
                                JavaScript</h1>
                            <p>프론트엔드의 기본이라 할 수 있는 HTML과CSS를 다룰 수 있습니다.
                            <br></br>
                            <br></br>
                            웹페이지의 동적인 부분을 담당하는 JavaScript를 활용하여 HTML과CSS 만으로는 다소 밋밋한 페이지를
                            <br></br>
                            <br></br>
                            시각적,기능적으로 더욱 뛰어난 페이지로 구성이 가능합니다.
                            

                            </p> 
                        </div>
                    </li>
                    <li>
                    </li>
                </ol>
            </div>
        </div>
    );
};


export default Back;