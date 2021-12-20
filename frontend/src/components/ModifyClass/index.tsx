import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModifyClass = (props: any) => {

    const currentId = props.props
    const navigate = useNavigate();

    let [course, setCourse] = useState({
        courseName: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        instructorId: '',
        description: '',
        sunday: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
    })
    useEffect(() => {
        {
            axios.get(`http://localhost:8081/courses/id/${currentId}`)
                .then(response => {
                    setCourse(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
            // if (course.startTime.length == 8) {
            //     setCourse({
            //         ...course,
            //         startTime: course.startTime.substring(0, 5)
            //     })
            //     console.log(course)
            // }
            // if (course.endTime.length == 8) {
            //     setCourse({
            //         ...course,
            //         endTime: course.endTime.substring(0, 5)
            //     })
            //     console.log(course)
            // }
            console.log(course)
        }
    }, []);

    function onSubmitHandler(event: any) {
        event.preventDefault();
        console.log(course)
        axios.put(`http://localhost:8081/courses/update/${currentId}`, course)
            .then(response => {
                console.log(response.data);
                navigate('/my-account');
            })
            .catch(error => {
                console.error(error);
            })
    }

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        })
    }

    function Toggle(event: any) {
        if (event.target.checked === "false") {
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
                                    <label style={{ fontWeight: 'bold' }} htmlFor="">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="courseName"
                                        value={course.courseName}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }} htmlFor="">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        value={course.description}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }} htmlFor="">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="startDate"
                                        value={course.startDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }} htmlFor="">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="endDate"
                                        value={course.endDate}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }} htmlFor="">Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="startTime"
                                        step={1}
                                        value={course.startTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }} htmlFor="">End Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="endTime"
                                        step={1}
                                        value={course.endTime}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }}>Days of the Week</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="sunday" onChange={Toggle} value={course.sunday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Sunday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monday" onChange={Toggle} value={course.monday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Monday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tuesday" onChange={Toggle} value={course.tuesday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Tuesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="wednesday" onChange={Toggle} value={course.wednesday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Wednesday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="thursday" onChange={Toggle} value={course.thursday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Thursday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="friday" onChange={Toggle} value={course.friday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Friday</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="saturday" onChange={Toggle} value={course.saturday} checked={course.friday == "true"} />
                                        <label className="form-check-label">Saturday</label>
                                    </div>
                                </div>
                                <br />
                                <input
                                    type="submit"
                                    value="Update"
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
export default ModifyClass;