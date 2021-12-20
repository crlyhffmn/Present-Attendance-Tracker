import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Assignment(props: any) {

    const navigate = useNavigate();
    let courseId = localStorage.getItem("currentCourseId");

    const [assignment, setAssignment] = useState({
        assignmentName: "",
        grade: "",
        status: "0",
        userId: "",
        courseId: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8081/courses/id/` + courseId)
            .then(response => {
                response.data.endTime = null;
                response.data.startTime = null;
                setAssignment({
                    ...assignment,
                    courseId: response.data
                })
            })
            .catch(error => {
                console.error("getCurrentUser in CreateClass: " + error);
            })
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
    let participants: any[] = new Array();
    let cp: any = courseParticipants;

    if (cp.length > 0) {
        for (let i = 0; i < cp.length; i++) {
            if (cp[i].course_id.id == courseId) {
                participants.push(cp[i].participant_id)
            }
        }
    }

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setAssignment({
            ...assignment,
            [event.target.name]: event.target.value,
        });
    }

    function onSubmitHandler(event: any) {
        event.preventDefault();

        for (let i = 0; i < participants.length; i++) {
            assignment.userId = participants[i].id
            axios.post(`http://localhost:8081/assignments`, assignment)
            .then(response => {
                navigate('/my-account');
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="">
                                    Assignment Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="assignmentName"
                                    value={assignment.assignmentName}
                                    onChange={onChangeHandler}
                                    placeholder="Write An Essay"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="btn btn-block"
                                style={{ backgroundColor: "rgb(228, 111, 3)" }}
                            >
                                Add
                            </Button>
                        </form>

                    </div>
                    <button className="btn"><a className="text-dark" href="/register" style={{ textDecoration: "none" }}>Don't Have an Account?</a></button>
                </div>
            </div>
        </div>
    )
}

export default Assignment
