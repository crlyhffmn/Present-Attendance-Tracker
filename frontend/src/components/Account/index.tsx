import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Classes from "./Classes";
import axios from "axios";

function Account() {
    var name = localStorage.getItem('currentUserFirstName')

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        {
            console.log("Here")
            axios.get('http://localhost:8081/courses')
            .then(response => {
                setCourses(response.data)
                console.log(courses)
            })
            .catch(error => console.error(error))
        }
    },[]);

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-sm-7">
                    {
                        courses.map(item => <Classes data={item} />)
                    }
                </div>
                <div className="col-sm-5 ms-auto text-center">
                    <h3>Welcome {name}!</h3>
                    <Button
                        className="btn btn-block"
                        style={{ backgroundColor: "rgb(228, 111, 3)" }}
                    >
                        <a className="text-dark" href="/create-class" style={{ textDecoration: "none" }}>Create A Class</a>
                    </Button>
                    <br /><br />
                    <Button
                        className="btn btn-block"
                        style={{ backgroundColor: "rgb(228, 111, 3)" }}
                    >
                        <a className="text-dark" href="/" style={{ textDecoration: "none" }}>Register For A Class</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Account;