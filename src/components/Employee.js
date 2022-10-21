import React, { Component } from 'react';
import Details from './Details';
export default class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: { id: null, firstname: 'amit', lastname: 'nagar', email: 'amit@gmail.com', contact: '9876543210', }
        };
        this.changeData = this.changeData.bind(this);
    };

    changeData() {
        this.setState({ employee: { id: null, firstname: 'rakesh', lastname: 'nagar', email: 'rakesh@gmail.com', contact: '9876543210', } })
    }

    render() {
        const { firstname, lastname, email, contact } = this.state.employee;
        return (
            <>
                <Details
                    keyName="employee"
                    data={this.state.employee}
                    changeData={this.changeData}
                />
            </>
        )
    }
}

