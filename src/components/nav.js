import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {


render(){
    return(
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <li className="main-nav__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link to="/tournaments">All Tournaments</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link to="/create">Create a new Tournament</Link>
                    </li>
                </ul>
            </nav>
    )
}

}
export default Nav;

