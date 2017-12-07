import React from 'react';
import Game from './game';
import Header from './header';

const App = (props) => (
    <div>
        <div className="app">
            <Header />
            <Game />
        </div>
    </div>
);

export default App;
