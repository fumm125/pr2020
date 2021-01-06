import React, {Component} from 'react';
import footerlogo from './img/footer.png';
import './Main.scss';
import Topnavi from './components/Topnavi';
import Button from './components/Button';
import Cover from './components/Cover';


const Main = () => {
  return (
    <div className="Mainct">
        <Topnavi></Topnavi>
        <Cover></Cover>
      <body>
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