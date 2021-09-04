import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class Dashboard extends Component {
    render() {
        return (
            <div className={"container mt-5"}>
                <div className={"row"}>
                    <div className={"col-lg-6"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Total Category</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    500
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>


            </div>
        );
    }
}

export default Dashboard;