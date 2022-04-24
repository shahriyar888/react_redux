import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getLeads,deleteLead} from "../../actions/leads";
import leads from "../../reducers/leads";
import Table from "../layaout/Table/Table";

class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired
    }
    delete_call = id =>{
        console.log('this called from comm')
        this.props.deleteLead(id)
    }
    componentDidMount() {
        this.props.getLeads();
        console.log(this.props)
    }


    render() {
        const columns=['id','name','email','message']
        const rows = this.props.leads
        return (
            <React.Fragment>
                <h1>Leads</h1>
                <Table columns={columns} rows ={rows} deleteButton={this.delete_call}/>
            </React.Fragment>
        )
            ;
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, {getLeads,deleteLead})(Leads);
