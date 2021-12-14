import React, { useState, useEffect, } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
function Class(props: any) {


    let data = props.props
    let id: string = data[0];

    for (var i = 1; i < data.length; i++) {
        id += data[i];
    }

    console.log(id);
    const [course, setCourse] = useState({
        courseName: "",
        endDate: "",
        endTime: "",
        participants: "",
        startDate: "",
        startTime: ""
    })

    const [instructor, setInstructor] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    })

    useEffect(() => {
        {
            axios.get('http://localhost:8081/courses/' + id)
                .then(response => {
                    setCourse(response.data)
                    setInstructor(response.data.instructorId);
                })
                .catch(error => console.error(error))
        }
    }, []);

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>{course.courseName}</h1>
            <div className="row">
                <div className="col-sm" style={{ border: "solid", borderColor: "gray", background: "lightgray" }}>

                </div>
                <div className="col-sm-3 ms-auto text-center" style={{ border: "solid", borderColor: "gray", background: "lightgray" }}>
                    <h2>Instructor:</h2>
                    <h3>{instructor.firstName + " " + instructor.lastName}</h3><br />
                    <h2>Email:</h2>
                    <h4>{instructor.email}</h4><br /><br />
                    <Button
                        className="btn btn-block"
                        size="lg"
                        style={{ backgroundColor: "rgb(228, 111, 3)" }}
                    >
                        <a className="text-dark" href="/" style={{ textDecoration: "none" }}>Mark Attendance</a>
                    </Button><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Class
