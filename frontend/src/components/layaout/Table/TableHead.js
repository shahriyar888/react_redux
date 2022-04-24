import React, {Component} from 'react';

class TableHead extends Component {
    render() {
        const {columns,deleteButton} = this.props
        return (
            <thead>
                {columns.map(itemName => <th>{itemName}</th>)}
                {deleteButton?<td />:""}
            </thead>
        );
    }
}

export default TableHead;