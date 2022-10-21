import React, { Component } from 'react'
import axios from 'axios'
import TablePaginate from 'react-paginate';
import "../App.css"
import Navbar from './layout/Navbar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            filter: '',
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://633ed86383f50e9ba3b9fc55.mockapi.io/api/employee`)
            .then(res => {
                const data = res.data;
                const users = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const { filter } = this.state;
                const lowercasedFilter = filter.toLowerCase();
                const filteredData = users.filter(item => {
                    return Object.keys(item).some(key =>
                        item[key].toLowerCase().includes(lowercasedFilter)
                    );
                });
                {console.log(filteredData,)}
                const postData = (
                    <div>
                        <table className="table table-success table-striped my-2" style={{
                            width: "87%",
                            marginLeft: "7%"
                        }}>
                            <thead>
                                <tr>
                                    <th>First-Name</th>
                                    <th>Last-Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Eduction</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.contact}</td>
                                            <td>{user.education}</td>
                                            <td>
                                                <Button variant="contained" startIcon={<DeleteIcon />} color='warning' onClick={() => this.handleDelete(user.id)} >Delete</Button>
                                                <Button startIcon={<EditIcon />} variant="contained" className='mx-3'><Link
                                                    style={{ textDecoration: "none", color: "white" }}
                                                    to={{
                                                        pathname: `/employee/${user.id}`,
                                                        // state: { edit: true, userId: user.id }
                                                    }}
                                                >
                                                    Edit</Link>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
    }
    handleChange = e => {
    
        this.setState({ filter: e.target.value });
        console.log(this.state.filter)
        
    };
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        console.log(e.selected)
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    handleDelete = (id) => {

        axios.delete(`https://633ed86383f50e9ba3b9fc55.mockapi.io/api/employee/${id}`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
                window.location.reload();
            })
    }
    componentDidMount() {
        this.receivedData()
    }
    render() {
        const { filter } = this.state
        return (
            <div>
                <Navbar />
                <div>
                    <label><strong>Search:</strong></label>
                    <input className="table-success table-striped my-4" value={filter} onChange={this.handleChange} />
                </div>
                {this.state.postData}
                <TablePaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                     />
                    
            </div>

        )
    }
}