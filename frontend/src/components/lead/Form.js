import React, {Component} from 'react';
import {addLead} from "../../actions/leads";
import {connect} from 'react-redux'

class Form extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }
    onSubmmit = e => {
        e.preventDefault();
        const {name,email,message} = this.state
        const lead = {name,email,message}
        this.props.addLead(lead)
    }
    onChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        const {name, email, message} = this.state
        return (
            <div>
                <form onSubmit={this.submitCall}>
                    <div className="form-group">
                        <label htmlFor="id_name">Name</label>
                        <input type="text" className="form-control" id={"id_name"} aria-describedby="emailHelp"
                               name={"name"}
                               value={this.state.name} placeholder="Enter name" onChange={this.onChange}/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input type="email" id={"InputEmail"} className="form-control" aria-describedby="emailHelp"
                               name={"email"}
                               value={this.state.email} placeholder="Enter email" onChange={this.onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="id_message">Message</label>
                        <input type="text" className="form-control" id={"id_message"} aria-describedby="emailHelp"
                               name={"message"}
                               value={this.state.message} placeholder="Enter message" onChange={this.onChange}/>

                    </div>
                    <div className="form-group" >
                        <br/>
                        <button onClick={this.onSubmmit} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null,{addLead})(Form);