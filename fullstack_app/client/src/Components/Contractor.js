import React from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';

export default class Contractor extends React.Component {
    state = {
        data: [],
        userdata: [],
        userid: this.props.location.state.userid,
        name: null,
        quantity: null,
        intervalIsSet: false
      };

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getDataFromDb, 1000);
          this.setState({ intervalIsSet: interval });
        }
    }
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }

    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getRequestData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };

    putDataToDB = (e) => {
        e.preventDefault();
        let userid=this.state.userid;
        let equip =e.target.elements.equip.value;
        let quantity =e.target.elements.quantity.value;

    
        axios.post('http://localhost:3001/api/putRequestData', {
            userid: userid,
            equip: equip,
            quantity: quantity
        });
    };    

    render(){
        const { data } = this.state;
        console.log(data)
        return(
            <div>
                <NavLink to='/contractor' activeClassName='is-active' exact={true}>Home</NavLink> 
                <NavLink to='/' activeClassName='is-active' exact={true}>Logout</NavLink> 
                <h1>Contractor Home Page</h1>
                <h2>My Requests</h2>
                <ul>
                {data.length <= 0
                    ? 'NO REQUESTS YET'
                    : data.map((dat) => {
                        if (dat.userid === this.state.userid){
                            return(
                                <li style={{ padding: '10px' }} key={dat.id}>
                                <span style={{ color: 'gray' }}> User Name: </span> {dat.userid} <br />
                                <span style={{ color: 'gray' }}> Request Id: </span> {dat._id} <br />
                                <span style={{ color: 'gray' }}> Equipment: </span> {dat.equip} <br />
                                <span style={{ color: 'gray' }}> Quantity: </span>  {dat.quantity} <br />
                                </li>
                                )
                        }
                        else{
                            
                        }
                       
                    })}
                </ul>
                <form onSubmit={this.putDataToDB}>
                    <label>Equipment</label>
                    <input type="text" name="equip"></input>
                    <label>Quantity</label>
                    <input type="number" name="quantity"></input>
                    <button>Request</button>
                </form>

            </div>
        );
    }
}