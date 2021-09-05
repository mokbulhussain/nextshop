import React, {Component} from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];
class TransactionTable extends Component {
    render() {
        return (
            <div className={"dataTables"}>
                <DataTable
                    title="Arnold Movies"
                    columns={columns}
                    data={this.props.data}
                    paginationPerPage={5}
                    pagination={true}
                />
            </div>
        );
    }
}

export default TransactionTable;