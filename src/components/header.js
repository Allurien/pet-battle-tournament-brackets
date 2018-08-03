import React from 'react';
import '../assets/css/app.css';
import Nav from './nav';
import perky from '../assets/images/perky-sm.gif';
import corgi from '../assets/images/corgi-sm.gif';

export default props => {
    return (<header className="page-header">
        <div className="page-header__masthead">
            <img className="page-header__image" src={corgi} alt="" />
            WoW Pet Battle Brackets
            <img className="page-header__image" src={perky} alt="" />
        </div>
        <Nav />
    </header>)
}