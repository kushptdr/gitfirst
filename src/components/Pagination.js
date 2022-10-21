import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "../App.css"
import { Link } from 'react-router-dom';


export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
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
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData =(
                    <table class="table table-success table-striped">
                    <thead>
                        <tr>

                            <th>First-Name</th>
                            <th>Last-Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th colSpan={2}>Action</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {slice.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>
                                        <button type='button' className='btn btn-outline-danger' onClick={() => this.handleDelete(user.id)}>Delete</button>
                                        <Link
                                        type='button'
                                        className='btn btn-outline-success'
                                            style={{textDecoration: "none" }}
                                            to={{
                                                pathname: `/employee/${user.id}`,
                                                // state: { edit: true, userId: user.id }
                                            }}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                    
             )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        console.log()
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>

        )
    }
}