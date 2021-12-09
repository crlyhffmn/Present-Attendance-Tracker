import React, { useState } from "react";

function CreateClass() {
    const [meeting, setMeeting] = useState({
        name: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: ''
        // days: [] may need to implement this later
    });

    function onSubmitHandler(event: any) {
        event.preventDefault();
        console.log(meeting);
        // axios.post("Put url to servlet here", meeting)
        // .then(response =>{
        //     save to state
        // })
        // .catch(err =>{
        //     Couldn't add to db
        // })
    }

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setMeeting({
            ...meeting,
            [event.target.name]: event.target.value,
        });
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
                                        name="name"
                                        value={meeting.name}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="name"
                                        value={meeting.startDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="name"
                                        value={meeting.endDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="name"
                                        value={meeting.startTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="name"
                                        value={meeting.startTime}
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