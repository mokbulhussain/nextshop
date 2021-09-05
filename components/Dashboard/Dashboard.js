import React, {Component} from 'react';
import {Card} from "react-bootstrap";

import TransactionTable from "./TransactionTable";
import DashboardChart from "./DashboardChart";
import DashboardList from "./DashboardList";
const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 2, title: 'Conan the Barbarian', year: '1982' },
    { id: 3, title: 'Conan the Barbarian', year: '1982' },
    { id: 4, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
];


class Dashboard extends Component {
    render() {
        return (
            <div className={"container mt-5"}>
                <div className={"row"}>
                    <div className={"col-lg-6"}>
                        <DashboardList/>
                        <div className={"row"}>
                            <div className={"col-lg-12"}>
                                <DashboardChart/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-6"}>
                        <TransactionTable
                        data={data}

                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;