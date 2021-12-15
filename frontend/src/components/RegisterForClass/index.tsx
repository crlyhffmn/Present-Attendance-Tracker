import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Classes from "./Classes";

const RegisterForClass = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState();
    useEffect(() => {
        axios.get('http://localhost:8081/users/email/' + localStorage.getItem('currentUserEmail'))
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("getCurrentUser() in RegisterForClass: " + error);
            })
    }, []);

    const [course, setCourse] = useState({
        course_id: "",
        participants: []
    });

    const [message, setMessage] = useState({
        message: ""
    });

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        {
            axios.get('http://localhost:8081/courses')
                .then(response => {
                    setCourses(response.data)
                })
                .catch(error => console.error(error))
        }
    }, []);

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        console.log(event.target.value);
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });
    }

    function onSubmitHandler(event: any) {
        event.preventDefault();
        console.log(course.course_id);
        console.log(user);
        axios.put("http://localhost:8081/courses/addParticipant/" + course.course_id, user)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.error("Error in submitHandler of RegisterForClass: " + error))

        axios.get("http://localhost:8081/courses")
            .then(response => {
                console.log(response.data);

                setMessage({
                    ...message,
                    message: "Successful Register"
                })
            })
            .catch(error => console.error("Error in submitHandler part 2 of RegisterForClass: " + error))
    }


    return (
        <div className="container">
            <Form onSubmit={onSubmitHandler}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>
                        Course or Meeting ID:
                    </InputGroup.Text>
                    <FormControl
                        placeholder="ID"
                        onChange={onChangeHandler}
                        name="course_id"
                    />
                </InputGroup>
                <Button type="submit">Submit</Button><br />
                <small className="text-success">{message.message}</small>
            </Form>
            <div className="row" style={{ overflowY: "auto"}}>
                <h3 className="text-center">Open Classes</h3>
                {
                    courses.map(item => <Classes data={item} />)
                }
            </div>
        </div>
    )
}
export default RegisterForClass;