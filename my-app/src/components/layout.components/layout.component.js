import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav.component'; 

export default function DefaultLayout ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (
            <>
 
                <Nav/>
 
                <MatchedPage {...matchProps} />
            </>
        )} />
    )
};