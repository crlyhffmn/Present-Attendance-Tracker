import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateClass() {

    const navigate = useNavigate();
    const userEmail = localStorage.getItem('currentUserEmail');

    const [course, setCourse] = useState({
        courseName: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        instructorId: '',
        description: "",
        sunday: "false",
        monday: "false",
        tuesday: "false",
        wednesday: "false",
        thursday: "false",
        friday: "false",
        saturday: "false"
    });

    useEffect(() => {
        console.log("useEffect stuff")
        axios.get(`http://localhost:8081/users/email/${userEmail}`)
        .then(response => {
            setCourse({
                ...course,
                instructorId : response.data
            })
            console.log(course)
        })
        .catch(error => {
            console.error("getCurrentUser in CreateClass: " + error);
        })
    }, []);

    function onSubmitHandler(event: any) {
        event.preventDefault();
        console.log("Submitting...");
        axios.post('http://localhost:8081/courses', course)
            .then(response => {
                console.log(response.data);
                navigate('/my-account')
            })
            .catch(error => {
                console.log(error);
            })
    }

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });
    }

    function Toggle(event: any) {
        if (event.target.value === "false") {
            setCourse({
                ...course,
                [event.target.name]: "true",
            });
        } else {
            setCourse({
                ...course,
                [event.target.name]: "false",
            });
        }
    }

    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                        <div className="wrapper">
                            <form onSubmit={onSubmitHandler}>
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="courseName"
                                        value={course.courseName}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        value={course.description}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="startDate"
                                        value={course.startDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="endDate"
                                        value={course.endDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="startTime"
                                        value={course.startTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="endTime"
                                        value={course.endTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Days of the Week</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="sunday" onClick={Toggle} value={course.sunday} />
                                        <label className="form-check-label">Sunday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monday" onClick={Toggle} value={course.monday} />
                                        <label className="form-check-label">Monday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tuesday" onClick={Toggle} value={course.tuesday} />
                                        <label className="form-check-label">Tuesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="wednesday" onClick={Toggle} value={course.wednesday} />
                                        <label className="form-check-label">Wednesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="thursday" onClick={Toggle} value={course.thursday} />
                                        <label className="form-check-label">Thursday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="friday" onClick={Toggle} value={course.friday} />
                                        <label className="form-check-label">Friday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="saturday" onClick={Toggle} value={course.saturday} />
                                        <label className="form-check-label">Saturday</label>
                                    </div>
                                </div>
                                <br />
                                <input
                                    type="submit"
                                    value="Create"
                                    className="btn btn-block"
                                    style={{ backgroundColor: "rgb(228, 111, 3" }}
                                    // onClick={() => getInstructor()}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3" />
                </div>
            </div>
        </div>
    )
}
export default CreateClass