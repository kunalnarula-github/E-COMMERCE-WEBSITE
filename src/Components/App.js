import React from "react";
import Shop from './Shop';
import Home from './Home';
import {Route} from 'react-router-dom';

const App = () => {
    return(
        <div>
            <Route path='/' component={Home} />
            <Route path='/shop' component={Shop} />
        </div>
    )
}

export default App