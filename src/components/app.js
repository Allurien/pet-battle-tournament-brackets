import React from 'react';
import '../assets/css/app.css';
import {Route} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import perky from '../assets/images/perky-sm.gif';
import corgi from '../assets/images/corgi-sm.gif';
import Header from './header';
import Home from './home';
import ListTournaments from './listTournaments';
import CreateTournament from './createTournament';

const App = () => (
    <div>
        <div className="app">
            <Header />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateTournament} />
        <Route exact path="/tournaments" component={ListTournaments} />
    </div>
);

export default App;
