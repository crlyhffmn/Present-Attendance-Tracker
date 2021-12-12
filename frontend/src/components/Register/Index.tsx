import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/Login-RegisterForm.css";


function Register() {
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
                console.log(response.data)
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
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={user.email}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={onChangeHandler}
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
