import React, {Component} from 'react';
import Leads from "./Leads";
import Form from "./Form";

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Form />
                <Leads />

            </React.Fragment>
        );
    }
}

export default Dashboard;