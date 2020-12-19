import React from 'react';
import Button from './components/Button';
import './App.scss';
import footerlogo from './img/footer.png';


function Mainpage() {
  return (
    <div className="Mainct">
      <header className="Topnav">
        <div className="sec1">
            <h1>Text</h1>
        </div>
        <nav>
          <span className="mainbr">Member</span>
          <span className="projectbr">Project</span>
          <span className="boardbr">Board</span>
          <div className="sec3">

          </div>
        </nav>
        <div className="sec3">
          <Button color="white" size="medium">Google 로그인</Button>
        </div>
      </header>
      <body>
        <div className="sidebar">
          <span className="1">123123</span>
          <span className="2">123123</span>
        </div>
      </body>
      <footer>
        <div className="logos">
          <img src={footerlogo} alt='footerlogo'/>
        </div>
      </footer>
    </div>
  );
}

export default Mainpage;

