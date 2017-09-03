import React from 'react';
import Router from 'react-router';
import { Link, RouteHandler } from 'react-router';


export default class AppHandler extends React.Component {
    render() {
        return (
            <div className='app'>
                <Link to='login'>Login</Link>

                // VERY IMPORTANT, this is what handles all our routes
                <RouteHandler />
            </div>
        );
    }
}
