import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/Login-RegisterForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


const Register = (props: any) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    function onSubmitHandler(event: any) {
        event.preventDefault();
        axios.post('http://localhost:8081/users', user)
            .then(response => {
                setUser(response.data);
                localStorage.setItem('currentUserFirstName', response.data.firstName);
                localStorage.setItem('currentUserId', response.data.id);
                localStorage.setItem('currentUserEmail', response.data.email);
                console.log(response.data);
                navigate('/my-account');
            })
            .catch(error => {
                console.error(error);
            })
    }

    function onChangeHandler(event: any) {
        console.log(event.target.name);
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="wrapper">
                            <form onSubmit={onSubmitHandler}>
                                <div className="form-group">
                                    <label htmlFor="">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={onChangeHandler}
                                        placeholder="first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={onChangeHandler}
                                        placeholder="last name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">
                                        <FontAwesomeIcon icon={faEnvelope} /> {' '} Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={user.email}
                                        onChange={onChangeHandler}
                                        placeholder="example@mail.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">
                                        <FontAwesomeIcon icon={faLock} /> {' '} Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={onChangeHandler}
                                        placeholder="password"
                                    />
                                </div><br />
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn btn-block"
                                    style={{ backgroundColor: "rgb(228, 111, 3)" }}
                                />
                            </form>
                        </div>
                        <button className="btn"><a className="text-dark" href="/login" style={{ textDecoration: "none" }}>Already Have an Account?</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
