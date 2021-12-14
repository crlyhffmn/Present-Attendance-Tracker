import axios from "axios";
import { useState } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const RegisterForClass = () => {

    const [course, setCourse] = useState({
        course_id: "",
        participants: []
    });

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });
    }

    function onSubmitHandler(event : any) {
        event.preventDefault();
        //Get from axios
    }

    function setCurrentUser() {
        let currentUser = null;
        axios.get('http://localhost:8081/users/email/' + localStorage.getItem('currentUserEmail'))
        .then(response => {
            
        })
        .catch(error => {
            console.error("Set current user: " + error);
        })
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
                />
            </InputGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default RegisterForClass;