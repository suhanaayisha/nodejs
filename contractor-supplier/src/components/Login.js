import React from 'react';
import { NavLink} from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props){
        super(props);

    }

    onSubmit = (e) => {
        e.preventDefault();

        let user =e.target.elements.users.value;
        if (user == "contractor"){
            this.props.history.push('/contractor');
        }
        else{
            this.props.history.push('/supplier');
        }
    };

    render(){
        return(
            <div>
                
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="text"></input>
                    <label>Login As:</label>
                    <select name="users">
                        <option value="contractor">Contractor</option>
                        <option value="supplier">Supplier</option>
                    </select>
                    <button>Login</button>
                </form>
    
            </div>
        )
    }
}