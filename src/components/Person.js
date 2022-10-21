import React, { Component } from 'react';
import Details from './Details';
export default class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: { id: null, firstname: 'Anurag', lastname: 'nankani', email: 'anurag@gmail.com', contact: '9988776655', }
        };
        this.changeData = this.changeData.bind(this);
    };

    changeData(){
        this.setState({employee: { id: null, firstname: 'rakesh', lastname: 'nagar', email: 'rakesh@gmail.com', contact: '9876543210', }})
    }

    render() {
        const {firstname, lastname, email, contact} = this.state.person;
        return (
            <>
                <Details
                    keyName="person"
                    data= {this.state.person}
                    changeData = {this.changeData}
                />
            </>
        )
    }
}

