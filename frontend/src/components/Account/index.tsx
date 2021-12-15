import React, { useState, useEffect, } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Classes from "./Classes";

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
    let cp: any = courseParticipants;
    let c: any = courses;
    
    
    if(cp.length > 0 && courses.length > 0){
        for(let i = 0; i < cp.length; i++){
            if(cp[i].participant_id.id == id){
                enrolledCoursesId.push(cp[i].course_id.id);
            }
        }
        for(let i = 0; i < enrolledCoursesId.length; i++){
            for(let j = 0; j < c.length; j++){
                if(enrolledCoursesId[i] == c[j].id){
                    enrolledCourses.push(c[j])
                }
            }
        }
    }


    return (
        <div className="container" >
            <br />
            <div className="row">
                <div className="col-sm-7" style={{ overflowY: "auto" }}>
                    <h3 className="text-center">Your Enrolled Classes</h3>
                    {
                        enrolledCourses.map(item => <Classes data={item} />)
                    }
                </div>
                <div className="col-sm-5 ms-auto text-center">
                    <h3>Welcome {name}!</h3>
                    <Button
                        className="btn btn-block"
                        size="lg"
                        style={{ backgroundColor: "rgb(228, 111, 3)" }}
                    >
                        <a className="text-dark" href="/create-class" style={{ textDecoration: "none" }}>Create A Class</a>
                    </Button>
                    <br /><br />
                    <Button
                        className="btn btn-block"
                        size="lg"
                        style={{ backgroundColor: "rgb(228, 111, 3)" }}
                    >
                        <a className="text-dark" href="/course-reg" style={{ textDecoration: "none" }}>Register For A Class</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Account;