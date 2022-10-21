
import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import '../App.css';
import From from './From';
import axios from 'axios';

import Button from '@mui/material/Button';

import TableRowsIcon from '@mui/icons-material/TableRows';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: { id: null, firstname: '', lastname: '', email: '', education: '', contact: '' },
            isEdit: false,
            open:false
        };
    };
    userInput = (e) => {
        let user1 = this.state.user
        user1[e.target.name] = e.target.value
        this.setState({ user: user1 })
    }
    componentDidMount() {

        let urlLength = window.location.pathname.split('/').length
        if (urlLength > 2) {
            let userId = window.location.pathname.split('/')[urlLength - 1]
            if (userId) {
                axios.get(`https://633ed86383f50e9ba3b9fc55.mockapi.io/api/employee/${userId}`)
                    .then(data => {
                        if (data.status === 200) {
                            this.setState({
                                user: data.data,
                                isEdit: true
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }
        }

    }

    // handleEdit = (user) => {
    //     this.setState({
    //         user: user,
    //         isEdit: true,
    //     });
    // }
    onUpdate = () => {
        let urlLength = window.location.pathname.split('/').length
        if (urlLength > 2) {
            let userId = window.location.pathname.split('/')[urlLength - 1]
            console.log(userId)
            if (userId) {
                let user = this.state.user
                axios({
                    url: `https://633ed86383f50e9ba3b9fc55.mockapi.io/api/employee/${userId}`,
                    method: "PUT",
                    data: user
                })
                    .then(data => {
                        if (data.status === 200) {
                            this.setState({
                                user: data.data
                            });
                            window.location.href = "/employee"
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        // const { firstname, lastname, email,education, contact } = this.props.user
        let user = this.state.user;
        debugger
        axios({
            url: "https://633ed86383f50e9ba3b9fc55.mockapi.io/api/employee",
            method: "POST",
            // headers: {
            //      'Content-Type': 'application/javascript'
            //  },
            data: { ...user },
        }).then((res) => {

        })
        this.setState({
            user: { id: null, firstname: '', lastname: '', email: '', contact: '', education: '' },
            open:true
        })
    }
    handleSelect = (data) => {
        let user1 = this.state.user
        
        // debugger
        // let educationList = data.map((el)=>{
        //   return  user1["education"]  = el["value"]
        // })
        user1["education"]  = data.map((el)=>{
            debugger
            let value = []
            value.push(el["value"])
            return value    
        })
        console.log(["value"])
        console.log( user1["education"]);
        this.setState({
            user: user1
        })
    }
    render() {

        return (
            <div>
                <Navbar />
                <div>
                    {/* <button className='btn btn-success' ><Link style={{ color: "white", textDecoration: "none" }} to="/employee">List of Users</Link></button>
                    <br /> */}

                    <Button href="/employee" startIcon={<TableRowsIcon />}>List of Users</Button>
                </div>

                <From
                    user={this.state.user}
                    isEdit={this.state.isEdit}
                    userInput={this.userInput}
                    onSubmit={this.onSubmit}
                    onUpdate={this.onUpdate}
                    handleEdit={this.handleEdit}
                    education={this.state.education}
                    handleSelect={this.handleSelect}
                    open={this.state.open}
                />

            </div>
        )
    }
}
export default Home
