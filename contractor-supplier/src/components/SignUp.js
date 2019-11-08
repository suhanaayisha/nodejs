import React from 'react';

export default class SignUp extends React.Component {
    render(){
        return(
            <div>
                
                <h2>Sign Up</h2>
                <form>
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="text"></input>
                    <label>Type of User:</label>
                    <select name="users">
                        <option value="contractor">Contractor</option>
                        <option value="supplier">Supplier</option>
                    </select>
                    <button>Sign Up</button>
                </form>
    
            </div>
        );
    }
}