import React, {Component} from 'react';
import footerlogo from './img/footer.png';
import './Main.scss';
import Topnavi from './components/Topnavi';
import Button from './components/Button';


const Main = () => {
  return (
    <div className="Mainct">
        <Topnavi></Topnavi>
      <body>
        <div className="sidebar">
          <span className="1">Front-end</span>
          <span className="2">Back-end</span>
        </div>
      </body>
      <footer>
        <div className="logos">
          <img src={footerlogo} alt='footerlogo'/>
        </div>
      </footer>
    </div>
  );
};

export default Main;