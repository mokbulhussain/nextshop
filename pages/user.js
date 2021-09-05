import React, {Component} from 'react';
import DataTable from "react-data-table-component";
import {faEdit, faTachometerAlt, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const data = [
    {
        id: 1,
        fullname: 'Rabbil Hasan',
        username: 'Rabbil',
        roll: 'admin',
        lastactivity: '12/12/2021',
    },
    {
        id: 2,
        fullname: 'Rabbil Hasan',
        username: 'Rabbil',
        roll: 'admin',
        lastactivity: '12/12/2021',
    },
    {
        id: 3,
        fullname: 'Rabbil Hasan',
        username: 'Rabbil',
        roll: 'admin',
        lastactivity: '12/12/2021',
    },
    {
        id: 4,
        fullname: 'Rabbil Hasan',
        username: 'Rabbil',
        roll: 'admin',
        lastactivity: '12/12/2021',
    },
];



class User extends Component {

    constructor(props) {
        super(props);
    }

    delete=(id)=>{
        console.log(id);
    }
    edit=(id)=>{
        console.log(id);
    }

    render() {
        const columns = [
            {
                name: 'Full Name',
                selector: 'fullname',
                sortable: true,

            },
            {
                name: 'User Name',
                selector: 'username',
                sortable: true,
            },
            {
                name: 'Roll',
                selector: 'roll',
                sortable: true,
            },
            {
                name: 'Last Activity',
                selector: 'lastactivity',
                sortable: true,
            },
            {
                name: 'Delete',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={()=>this.delete(row.id)} className="btn text-danger"><FontAwesomeIcon icon={faTrash} /></button>
            },
            {
                name: 'Edit',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={()=>this.edit(row.id)} className="btn text-primary"><FontAwesomeIcon icon={faEdit}/></button>
            },
        ];
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <div className={"dataTables"}>
                            <DataTable
                                title="Arnold Movies"
                                columns={columns}
                                data={data}
                                paginationPerPage={5}
                                pagination={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default User;