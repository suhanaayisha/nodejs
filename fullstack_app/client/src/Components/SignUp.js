import React from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';

export default class SignUp extends React.Component {
    state = {
        data: [],
        username: null,
        password: null,
        usertype: null,
        intervalIsSet: false
      };


    putDataToDB = (e) => {
        e.preventDefault();
        let username =e.target.elements.username.value;
        let password =e.target.elements.password.value;
        let usertype =e.target.elements.usertype.value;
        console.log(username,password,usertype)

    
      axios.post('http://localhost:3001/api/putUserData', {
          username: username,
          password: password,
          usertype: usertype
        });
        this.props.history.push('/');
      };

    
    render(){
        const { data } = this.state;
        // const users = this.getDataFromDb()
        // console.log(users)
        return(
            <div>
                <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink> 
                <h2>Sign Up</h2>
                <form onSubmit={this.putDataToDB}>
                    <label>Username</label>
                    <input type="text" name="username"></input>
                    <label>Password</label>
                    <input type="text" name="password"></input>
                    <label>Type of User:</label>
                    <select name="users" name="usertype">
                        <option value="contractor">Contractor</option>
                        <option value="supplier">Supplier</option>
                    </select>
                    <button>Sign Up</button>
                </form>
    
            </div>
        );
    }
}