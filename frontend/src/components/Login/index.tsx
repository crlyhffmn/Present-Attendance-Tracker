import { faEnvelope, faLock, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../style/Login-RegisterForm.css";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        credentialError: ""
    })

    function onSubmitHandler(event : any) {
        event.preventDefault();
        axios.get('http://localhost:8081/users/email/' + user.email)
            .then(response => {
                console.log(response.data);
                if (response.data.password === user.password) {
                    localStorage.setItem('currentUserFirstName', response.data.firstName);
                    localStorage.setItem('currentUserId', response.data.id);
                    navigate('/my-account')
                }else{
                    setError({
                        ...error,
                        credentialError: "Username or Password Incorrect"
                    })
                    console.log(response.data.password + " " + user.password)
                }
            })
            .catch(error => {
                setError({
                    ...error,
                    credentialError: "Username or Password Incorrect"
                })
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
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="">
                                    <FontAwesomeIcon icon={faEnvelope} /> {' '} Email
                                </label>
                                <input
                                    type="text"
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
                            </div>
                            <small className="text-danger">{error.credentialError}</small>
                            <br />
                            <Button
                                type="submit"
                                className="btn btn-block"
                                style={{ backgroundColor: "rgb(228, 111, 3)" }}
                            >
                                <FontAwesomeIcon icon={faSignInAlt} /> Login
                            </Button>
                        </form>

                    </div>
                    <button className="btn"><a className="text-dark" href="/register" style={{ textDecoration: "none" }}>Don't Have an Account?</a></button>
                </div>
            </div>
        </div>
    );
}

export default Login;
