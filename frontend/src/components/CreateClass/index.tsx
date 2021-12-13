import axios from "axios";
import React, { useEffect, useState } from "react";

function CreateClass() {

    // const [user, setUser] = useState();
    // useEffect(() => {
    //     axios.get('http://localhost:8081/users/' + Number(getCurrentUserId()))
    //     .then((response) => {
    //         console.log(response.data)
    //         setUser(response.data);
    //     })
    //     .catch(error =>{
    //         console.error(error);
    //     })
    // }, []);

    const [meeting, setMeeting] = useState({
        courseName: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: ''
        //instructorId: user
        // days: [] may need to implement this later
    });

    function onSubmitHandler(event: any) {
        event.preventDefault();
        console.log(meeting);
        axios.post('http://localhost:8081/courses', meeting)
        .then(response =>{
            setMeeting(response.data);
            console.log(response.data);
        })
        .catch(error =>{
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

    function getCurrentUserId() {
        let currentId = localStorage.getItem('currentUserId');
        if(currentId != null) {
            return currentId;
        } else {
            return 0;
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
                                    <label>Days of the Week</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Sunday" />
                                        <label className ="form-check-label">Sunday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Monday" />
                                        <label className ="form-check-label">Monday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Tuesday" />
                                        <label className ="form-check-label">Tuesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Wednesday" />
                                        <label className ="form-check-label">Wednesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Thursday" />
                                        <label className ="form-check-label">Thursday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Friday" />
                                        <label className ="form-check-label">Friday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Saturday" />
                                        <label className ="form-check-label">Saturday</label>
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