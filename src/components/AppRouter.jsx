import React from "react";
import { Switch, Route, Redirect, Link} from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';

const AppRouter = () => {
    return(
        <div>
            <Switch>
                <Route path='/posts'>
                    <Posts />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Redirect to='/posts'/>
            </Switch>
        </div>
    )
}

export default AppRouter;