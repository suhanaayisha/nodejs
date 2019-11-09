import React from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';

export default class Supplier extends React.Component {
    state = {
        data: [],
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
        fetch('http://localhost:3001/api/getBidData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };

      

    render(){
        console.log(this.state)
        const { data } = this.state;
        
        return(
            <div>
                <NavLink to='/supplier' activeClassName='is-active' exact={true}>Home</NavLink> 
                <NavLink to='/' activeClassName='is-active' exact={true}>Logout</NavLink> 
                <h1>Bids Page</h1>
                <ul>
                {data.length <= 0
                    ? 'No Bids yet'
                    : data.map((dat) => (
                        <li style={{ padding: '10px' }} key={dat.id}>
                        <span style={{ color: 'gray' }}> Bid Id: </span> {dat._id} <br />
                        <span style={{ color: 'gray' }}> Request Id </span> {dat.reqid} <br />
                        <span style={{ color: 'gray' }}> Price </span>  {dat.price} <br />
                        </li>
                    ))}
                </ul>
                <h2>Awarded Bids</h2>

            </div>
        );
    }
}