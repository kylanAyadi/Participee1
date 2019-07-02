import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component{

  

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom :"5%"}}>
                <Link to="/" className="navbar-brand">Particee</Link>
                <div className="collpase nav-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Movies</Link>
                        </li>
                    </ul>
                </div>
          </nav>
        )
    }
}