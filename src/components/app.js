import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import perky from '../assets/images/perky-sm.gif';
import corgi from '../assets/images/corgi-sm.gif';

const App = () => (
    <div>
        <div className="app">
            <img src={perky} alt="" />
            <p>WoW Pet Battle Brackets</p>
            <img src={corgi} alt="" />
        </div>
    </div>
);

export default App;
