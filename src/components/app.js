import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ItemsList from './ItemsList';
import ItemDetails from './ItemDetails';


const App = () => {
    return (
        <div>
            <h1>PokéBall Store</h1>
            <BrowserRouter>
                <Switch>
                    <Route path='/:id' component={ItemDetails} /> 
                    <Route path='/' exact component={ItemsList} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;