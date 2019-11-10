import React from 'react';
import Contractor from './Contractor';
import Supplier from './Supplier';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showContractorComponent: false,
          showSupplierComponent: false,
        };
        this._onContractorClick = this._onContractorClick.bind(this);
        this._onSupplierClick= this._onSupplierClick.bind(this);
      }

    _onContractorClick() {
        this.setState({
          showContractorComponent: true,
        });
      }

    _onSupplierClick() {
        this.setState({
            showSupplierComponent: true,
        });
    }

    render(){
        return(
            <div>
                <div onClick={this._onContractorClick}>Contractor</div>
                {this.state.showContractorComponent ?
                    <Contractor /> :
                    null
                 }
                {" "}
                <div onClick={this._onSupplierClick}>Supplier</div>
                {this.state.showSupplierComponent ?
                    <Supplier /> :
                    null
                 }
                ]
                
            </div>
        );
    }
}