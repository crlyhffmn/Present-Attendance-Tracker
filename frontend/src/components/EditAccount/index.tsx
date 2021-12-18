import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../style/Login-RegisterForm.css";

const EditAccount = () => {

    const navigate = useNavigate();
    const currentId = localStorage.getItem('currentUserId');

    let [user, setUser] = useState({
        id: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });
    useEffect(() => {
        {
                axios.get(`http://localhost:8081/users/${currentId}`)
                .then(response => {
                    setUser(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }, []);

    function onSubmitHandler(event: any) {
        event.preventDefault();
        axios.put(`http://localhost:8081/users/${currentId}`, user)
            .then(response => {
                setUser(response.data);
                localStorage.setItem('currentUserFirstName', user.firstName);
                localStorage.setItem('currentUserEmail', user.email);
                console.log(response.data);
                navigate('/account-details');
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
        console.log(user);
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
                                <Button
                                    type="submit"
                                    className="btn btn-block"
                                    style={{ backgroundColor: "rgb(228, 111, 3)" }}
                                >
                                Update
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditAccount;