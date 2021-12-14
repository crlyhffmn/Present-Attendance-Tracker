import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const RegisterForClass = () => {

    const [user, setUser] = useState();
    useEffect(() => {
        axios.get('http://localhost:8081/users/email/' + localStorage.getItem('currentUserEmail'))
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("getCurrentUser() in RegisterForClass: " + error);
        })
    },[]);

    const [course, setCourse] = useState({
        course_id: "",
        participants: []
    });

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        console.log(event.target.value);
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });
    }

    function onSubmitHandler(event : any) {
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
        })
        .catch(error => console.error("Error in submitHandler part 2 of RegisterForClass: " + error))
    }


    return (
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
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default RegisterForClass;