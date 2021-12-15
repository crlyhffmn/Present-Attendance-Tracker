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
        startTime: "",
        description: "",
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
    })

    const [instructor, setInstructor] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    })

    useEffect(() => {
        {
            axios.get('http://localhost:8081/courses/id/' + id)
                .then(response => {
                    setCourse(response.data);
                    setInstructor(response.data.instructorId);
                })
                .catch(error => console.error(error))
        }
    }, []);

    const sunday = course.sunday ? "Class" : "Off";
    const monday = course.monday ? "Class" : "Off";
    const tuesday = course.tuesday ? "Class" : "Off";
    const wednesday = course.wednesday ? "Class" : "Off";
    const thursday = course.thursday ? "Class" : "Off";
    const friday = course.friday ? "Class" : "Off";
    const saturday = course.saturday ? "Class" : "Off";

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>{course.courseName}</h1>
            <div className="row">
                <div className="col-sm" style={{ border: "solid", borderColor: "gray", background: "lightgray" }}>
                    <div className="row"><h4>{course.description}</h4></div><br />
                    <div className="row">
                        <div className="col-sm">
                            <h5>Start Date: {course.startDate}</h5>
                            <h5>End Date: {course.endDate}</h5>
                        </div>
                        <div className="col-sm">
                            <h5>Start Time: {course.startTime}</h5>
                            <h5>End Time: {course.endTime}</h5>
                        </div>
                    </div>
                    <br />
                    <div className="row " style={{textAlign: "center"}}>
                        <div className="col-sm-1" style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Sunday</h5><h5>{sunday}</h5></div>
                        <div className="col-sm-1"style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Monday</h5><h5>{monday}</h5></div>
                        <div className="col-sm-1"style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Tuesday</h5><h5>{tuesday}</h5></div>
                        <div className="col-sm-1"style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Wednesday</h5><h5>{wednesday}</h5></div>
                        <div className="col-sm-1"style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Thursday</h5><h5>{thursday}</h5></div>
                        <div className="col-sm-1"style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Friday</h5><h5>{friday}</h5></div>
                        <div className="col-sm-1"style={{border: "solid", borderColor: "rgb(228, 111, 3)", width: "130px", height: "130px"}}><h5>Saturday</h5><h5>{saturday}</h5></div>
                    </div>
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