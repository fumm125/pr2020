import React from 'react';
import Button from './components/Button';
import './Main.scss';
import footerlogo from './img/footer.png';

import { Route } from 'react-router-dom';
import Main from './Main';
import Member from './Member';
import Project from './Project';
import Feedback from './Feedback';
import Front from './Front';
import Back from './Back';




function App() {
  return (
    <div>
      <Route path="/" component={Main} exact/>
      <Route path="/Member" component={Member} />
      <Route path="/Project" component={Project} />
      <Route path="/Feedback" component={Feedback} />
      <Route path="/Front" component={Front} />
      <Route path="/Back" component={Back} />
    </div>
  );
};

export default App;

