import axios from "axios";
import React, { useState } from "react";
import "../../style/Login-RegisterForm.css";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function onSubmitHandler(event: any) {
        event.preventDefault();
        console.log(user);
        // axios.post("Put url to servlet here", user)
        // .then(response =>{
        //     save to state
        // })
        // .catch(err =>{
        //     Incorrect Credentials error
        // })
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
                                value="Login"
                                className="btn btn-block btn-primary"
                            />
                        </form>
                        
                    </div>
                    <button className="btn"><a className="text-dark" href="/register" style={{textDecoration: "none"}}>Don't Have an Account?</a></button>
                </div>
            </div>
        </div>
    );
}

export default Login;
