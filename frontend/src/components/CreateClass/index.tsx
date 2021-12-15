import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateClass() {

    const navigate = useNavigate();

    const getInstructor = () => {
        axios.get('http://localhost:8081/users/email/' + localStorage.getItem('currentUserEmail'))
            .then(response => {
                console.log("getting current user...")
                setMeeting({ ...meeting, instructorId: response.data });
            })
            .catch(error => {
                console.error("getCurrentUser in CreateClass: " + error);
            })
    }

    const [meeting, setMeeting] = useState({
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

    function onSubmitHandler(event: any) {
        event.preventDefault();
        getInstructor();
        console.log(meeting);
        axios.post('http://localhost:8081/courses', meeting)
            .then(response => {
                setMeeting(response.data);
                console.log(response.data);
                navigate('/my-account')
            })
            .catch(error => {
                console.log(error);
            })
    }

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setMeeting({
            ...meeting,
            [event.target.name]: event.target.value,
        });
    }

    function Toggle(event: any) {
        if (event.target.value === "false") {
            setMeeting({
                ...meeting,
                [event.target.name]: "true",
            });
        } else {
            setMeeting({
                ...meeting,
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
                                        value={meeting.courseName}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        value={meeting.description}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="startDate"
                                        value={meeting.startDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="endDate"
                                        value={meeting.endDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="startTime"
                                        value={meeting.startTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="endTime"
                                        value={meeting.endTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Days of the Week</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="sunday" onClick={Toggle} value={meeting.sunday} />
                                        <label className="form-check-label">Sunday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monday" onClick={Toggle} value={meeting.monday} />
                                        <label className="form-check-label">Monday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tuesday" onClick={Toggle} value={meeting.tuesday} />
                                        <label className="form-check-label">Tuesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="wednesday" onClick={Toggle} value={meeting.wednesday} />
                                        <label className="form-check-label">Wednesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="thursday" onClick={Toggle} value={meeting.thursday} />
                                        <label className="form-check-label">Thursday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="friday" onClick={Toggle} value={meeting.friday} />
                                        <label className="form-check-label">Friday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="saturday" onClick={Toggle} value={meeting.saturday} />
                                        <label className="form-check-label">Saturday</label>
                                    </div>
                                </div>
                                <br />
                                <input
                                    type="submit"
                                    value="Create"
                                    className="btn btn-block"
                                    style={{ backgroundColor: "rgb(228, 111, 3" }}
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