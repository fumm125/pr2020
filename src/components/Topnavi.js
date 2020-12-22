import React, { Component } from 'react';
import './Topnavi.scss';
import { Link } from 'react-router-dom';
import Button from './Button';


class Topnavi extends Component {
    render() {
        return (
            <div className="Top">
      <header className="Topnav">
        <div className="sec1">
            <Link to="/" className="Homelink">Text</Link>
        </div>
        <nav>
          <Link to="/Member" className="mainbr">Member</Link>
          <Link to="/Project" className="projectbr">Project</Link>
          <Link to="/Feedback" className="feedbackbr">Feedback</Link>
          <div className="sec3">

          </div>
        </nav>
        <div className="sec3">
          <Button color="white" size="medium">Google 로그인</Button>
        </div>
      </header>      
    </div>
        );
    }
    
};

export default Topnavi;