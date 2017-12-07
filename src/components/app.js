import React from 'react';
import Cards from './cards';
import Header from './header';

const App = (props) => (
    <div>
        <div className="app">
            <Header />
            <Cards />
        </div>
    </div>
);

export default App;
