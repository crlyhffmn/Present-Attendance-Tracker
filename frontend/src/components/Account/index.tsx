import React, { useState, useEffect, } from "react";
import { Alert, Col, ListGroup, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Classes from "./Classes";
import "../../style/MyAccountPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ClassCards from "./ClassCards";
import ClassCardsId from "./ClassCardsId";

function Account() {
    var name = localStorage.getItem('currentUserFirstName')
    var id = localStorage.getItem('currentUserId')
    const navigate = useNavigate();

    if (name == null || name.length == 0) {
        navigate("/")
    }
    let [courses, setCourses] = useState([]);
    useEffect(() => {
        {
            axios.get('http://localhost:8081/courses')
                .then(response => {
                    setCourses(response.data)
                })
                .catch(error => console.error(error))
        }
    }, []);

    const [courseParticipants, setCourseParticipants] = useState([]);
    useEffect(() => {
        {
            axios.get('http://localhost:8081/participant_course')
                .then(response => {
                    setCourseParticipants(response.data)
                })
                .catch(error => console.error(error))
        }
    }, []);

    let enrolledCoursesId: number[] = new Array();
    let enrolledCourses: any[] = new Array();
    let coursesCreated: number[] = new Array();
    let cp: any = courseParticipants;
    let c: any = courses;

    if(c.length > 0) {
        for(let i = 0; i < courses.length; i++){
            if(c[i].instructorId.id == id){
                coursesCreated.push(c[i]);
            }
        }
    }


    if (cp.length > 0 && courses.length > 0) {
        for (let i = 0; i < cp.length; i++) {
            if (cp[i].participant_id.id == id) {
                enrolledCoursesId.push(cp[i].course_id.id);
            }
        }
        for (let i = 0; i < enrolledCoursesId.length; i++) {
            for (let j = 0; j < c.length; j++) {
                if (enrolledCoursesId[i] == c[j].id) {
                    enrolledCourses.push(c[j])
                }
            }
        }
    }


    return (
        <div>
            <br />
            <Row id="welcome">
                <Alert id="welcomeAlert" variant="secondary"><h1>Welcome {name}!</h1></Alert>

            </Row>
            <Row>
                <Col xs={3} id="leftCol" style={{ border: 1, borderColor: "black" }}>
                    <ListGroup>
                        <ListGroup.Item id="listHead">User Actions</ListGroup.Item>
                        <ListGroup.Item action href="/create-class" id="liGroupItem1">
                            <FontAwesomeIcon icon={faPlus} />
                            {" "}Create a Class
                        </ListGroup.Item>
                        <ListGroup.Item action href="/course-reg" id="liGroupItem2">
                            <FontAwesomeIcon icon={faAppleAlt} />
                            {" "}Register for a Class
                        </ListGroup.Item>
                        <ListGroup.Item action href="/account-details" id="liGroupItem2">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {" "}View Account Details
                        </ListGroup.Item>
                        <ListGroup.Item action href="/edit-account" id="liGroupItem2">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {" "}Update Account Details
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-sm" style={{ overflowY: "auto" }} id="rightCol">
                    <h3 className="text-center">Your Enrolled Classes</h3>
                    {
                        enrolledCourses.map(item => <ClassCards data={item} />)
                    }
                </Col>
                <Col className="col-sm" style={{ overflow: "auto" }} >
                    <h3 className="text-center">Classes You Created</h3>
                    {
                        coursesCreated.map(item => <ClassCardsId data={item} />)
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Account;