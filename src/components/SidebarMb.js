import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SidebarMb.scss';


class SidebarMb extends Component {
    render() {
        return (
            <div className="sidebar">
          <Link to="/Front" className="frontbr">Front-end</Link>
          <Link to="/Back" className="backbr">Back-end</Link>
        </div>
        );
    }
    
};

export default SidebarMb;