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
import Bracket from './bracket';

const App = () => (
    <div  className="container">
        <div>
            <Header />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateTournament} />
        <Route exact path="/tournaments" component={ListTournaments} />
        <Route exact path="/bracket" component={Bracket} />
    </div>
);

export default App;
