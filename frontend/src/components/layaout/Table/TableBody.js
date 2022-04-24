import React, {Component} from 'react';

class TableBody extends Component {
    render() {
        const {columns,rows,deleteButton}=this.props

        return (
            <tbody>
                {rows.map(row => <tr>
                    {columns.map(col =><td>{row[col]}</td>)}
                    {deleteButton?<td><button className={"btn btn-danger btn-sm"} onClick={() =>this.props.deleteButton(row.id)}>Delete</button></td>:""}
                </tr>)}
            </tbody>
        );
    }

}

export default TableBody;