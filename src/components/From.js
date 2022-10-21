import React, { Component } from 'react'
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import Select from "react-select";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const optionList = [
    { value: "10th", label: "10th" },
    { value: "12th", label: "12th" },
    { value: "B.sc", label: "B.sc" },
    { value: "B.com", label: "B.com" },
    { value: "M.sc", label: "M.sc" }
]

export default class From extends Component {
    constructor(props) {
        super(props);
       this.state={
        open:false
       }
    };

    handleClose = (event,reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            open:false
        })
      };
    
     

    render() {
        console.log(this.props.user);
        const { firstname, lastname, email, contact, education } = this.props.user
        let isEdit = this.props.isEdit
        let open = this.props.open
        const action = (
            <React.Fragment>
              <Button color="secondary" size="small" onClick={this.handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          );
        
        return (
            <div>
                <div className="container my-5">
                    <div className="card">
                        <div className="card-body">
                            {/* <form onSubmit={isEdit ? (e) => this.props.onFormUpdate(e) : (e) => this.props.onFormSubmit(e)}> */}
                            <form>
                                <div className="form-group mb-3">
                                    <label><strong>First-Name</strong></label>
                                    <input type="text" className="form-control" required name="firstname" value={firstname} onChange={this.props.userInput} />
                                </div>
                                <div className="form-group mb-3">
                                    <label><strong>Last-Name</strong></label>
                                    <input type="text" className="form-control" name="lastname" value={lastname} onChange={this.props.userInput} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label><strong>Email</strong></label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={this.props.userInput} required />
                                </div>
                                <div className="form-group mb-3" style={{ width: "100%" }}>
                                    <label><strong>Education</strong></label>
                                    <Select
                                        name='education'
                                        options={optionList}
                                        placeholder="Select education"
                                        value={education}
                                        onChange={this.props.handleSelect}
                                        isSearchable={true}
                                        isMulti
                                    />
                                    {/* <Select name='education' value={education} onChange={this.props.handleSelect} isMulti>
                                        {optionList.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </Select> */}
                                </div>
                                <div className="form-group mb-3">
                                    <label><strong>Contact</strong></label>
                                    <input type="text" className="form-control" name="contact" value={contact} onChange={this.props.userInput} required />
                                </div>
                                <div className="d-grid mt-3">
                                    {/* <button type="submit" className="btn btn-primary btn-block">{isEdit ? "Update" : "Submit"}</button> */}
                                    < Button
                                        variant="contained"
                                        color='secondary'
                                        startIcon={<PublishIcon />}
                                        className='btn btn-block'
                                        onClick={isEdit ? (e) => this.props.onUpdate(e) : (e) => this.props.onSubmit(e)}>
                                        {isEdit ? "Update" : "Submit"}
                                    </Button>
                                    <Snackbar
                                        open={open}
                                        autoHideDuration={6000}
                                        onClose={this.handleClose}
                                        message=" submitted successfully "
                                        action={action}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


