import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class DashboardList extends Component {
    render() {
        return (
            <div className={"row"}>
                <div className={"col-lg-6 mt-3"}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total Category</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                500
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className={"col-lg-6 mt-3"}>
                    <Card >
                        <Card.Body>
                            <Card.Title>Total Category</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                500
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className={"col-lg-6 mt-3"}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total Category</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                500
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className={"col-lg-6 mt-3"}>
                    <Card>
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
        );
    }
}

export default DashboardList;