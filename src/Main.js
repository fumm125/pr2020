import React from 'react';
import footerlogo from './img/footer.png';
import Button from './components/Button';
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="Mainct">
      <header className="Topnav">
        <div className="sec1">
            <h1>Text</h1>
        </div>
        <nav>
          <Link to="/Member" className="mainbr">Member</Link>
          <Link className="projectbr">Project</Link>
          <Link className="boardbr">Board</Link>
          <div className="sec3">

          </div>
        </nav>
        <div className="sec3">
          <Button color="white" size="medium">Google 로그인</Button>
        </div>
      </header>
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