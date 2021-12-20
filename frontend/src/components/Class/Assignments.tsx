import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Assignments(props: any) {

    const [student, setStudent] = useState({
        firstName: "",
        lastName: ""
    });
    useEffect(() => {
        {
            axios.get('http://localhost:8081/users/' + props.data[0].userId)
                .then(response => {
                    setStudent(response.data)
                })
                .catch(error => console.error(error))
        }
    }, []);
    const assignment = props.data[0]
    let content = document.querySelector('.grade');

    function onSubmitHandler(event: any) {
        if (content != null) {
        }
    }

    const stu = student;
    const instructor = (
        <tr>
            <td>{assignment.assignmentName}</td>
            <td>{assignment.status}</td>
            {/* <td><div contentEditable className="grade">{assignment.grade}</div></td> */}
            <td>{stu.firstName + " " + stu.lastName}</td>
            {/* <td><Button
                className="btn btn-block text-dark"
                style={{ backgroundColor: "rgb(228, 111, 3)" }}
                onClick={onSubmitHandler}
            >
                save
            </Button></td> */}
        </tr>
    )

    const user = (
        <tr>
            <td>{props.data[0].assignmentName}</td>
            <td>{props.data[0].status}</td>
            {/* <td>{props.data[0].grade}</td> */}
        </tr>
    )

    return (
        props.data[1] ? instructor : user

    )
}

export default Assignments