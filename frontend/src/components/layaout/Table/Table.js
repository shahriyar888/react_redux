import React, {Component} from 'react';
import TableBody from "./TableBody";
import TableHead from "./TableHead";
class Table extends Component {


    render() {
        const {columns,rows,deleteButton} = this.props


        return (
            <table className={'table table-striped'}>
                <TableHead columns={columns}  deleteButton={deleteButton} />
                <TableBody columns={columns} rows ={rows} deleteButton={deleteButton}/>

            </table>
        );
    }
}

export default Table;