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