import React from 'react';
import { NavLink} from 'react-router-dom';

export default class App1 extends React.Component {
    render(){
        return(
            <div>
                
                <NavLink to='/' activeClassName='is-active' exact={true}>Login</NavLink>
                {" "}
                <NavLink to='/signup' activeClassName='is-active' exact={true}>New User? Sign up</NavLink>
            </div>
        )
    }
}