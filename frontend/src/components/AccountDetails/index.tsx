import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, FormLabel, ListGroup, Row } from "react-bootstrap";
import "../../style/Login-RegisterForm.css";

const AccountDetails = () => {

    let [user, setUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });
    useEffect(() => {
        {
            const id = localStorage.getItem('currentUserId');
            axios.get(`http://localhost:8081/users/${id}`)
                .then(response => {
                    console.log(response.data);
                    setUser(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }, []);

    return (
        <div>
            <Row>
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper">
                        <ListGroup>
                            <Row>
                                <FormLabel>First Name:</FormLabel>
                                <Col>
                                    <ListGroup.Item>
                                        {user.firstName}
                                    </ListGroup.Item>
                                </Col>
                            </Row>
                            <Row>
                                <FormLabel>Last Name:</FormLabel>
                                <Col>
                                    <ListGroup.Item>
                                        {user.lastName}
                                    </ListGroup.Item>
                                </Col>
                            </Row>
                            <Row>
                                <FormLabel>
                                    <FontAwesomeIcon icon={faEnvelope} /> {" "} Email:
                                </FormLabel>
                                <Col>
                                    <ListGroup.Item>
                                        {user.email}
                                    </ListGroup.Item>
                                </Col>
                            </Row>
                            <Row>
                                <FormLabel>
                                    <FontAwesomeIcon icon={faLock} /> {" "}Password:
                                </FormLabel>
                                <Col>
                                    <ListGroup.Item>
                                        ********
                                    </ListGroup.Item>
                                </Col>
                            </Row>
                        </ListGroup>
                    </div>
                    <button className="btn"><a className="text-dark" href="/edit-account" style={{ textDecoration: "none" }}>Click Here to Edit Your Account Details</a></button>
                </div>
            </Row>
        </div>

    )
}
export default AccountDetails;