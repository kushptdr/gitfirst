import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
          filter: '',
          data: [],
          
      };
    }
    receivedData() {
      
       axios .get(`https://633ed86383f50e9ba3b9fc55.mockapi.io/api/employee`)
       .then((res) => {
        let data =res.data
        this.setState({
            data
        })
       }
         ) } 
    componentDidMount() {
      this.receivedData()
  }
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div>
        <label><strong>Search:</strong></label>
         <input  className="table-success table-striped my-4" value={filter} onChange={this.handleChange} />

         <table className="table table-success table-striped my-4">
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
                        {filteredData.map((user, index) => {
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
      </div>
    
    )
  }
}
