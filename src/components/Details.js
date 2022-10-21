import React, { Component } from 'react'
export default class Details extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        const {firstname, lastname, email, contact} = this.props.data;
        debugger
        return (
            <>
            <div style={{marginLeft: "200px", borderStyle: "groove", width: "800px", height: "600px"}}>
            { this.props.keyName === "employee" && <button onClick={()=>{
                    this.props.changeData();
                }}>Change the Data</button>
            }
            <br/>
                <label>First Name : </label>
                <label style={{marginLeft: "30px"}}>{firstname}</label><br/>

                <label>Last Name : </label>
                <label style={{marginLeft: "30px"}}>{lastname}</label><br/>

                <label>Email : </label>
                <label style={{marginLeft: "30px"}}>{email}</label><br/>

                <label>Contact : </label>
                <label style={{marginLeft: "30px"}}>{contact}</label><br/>
            </div>
            </>
        )
    }
}

