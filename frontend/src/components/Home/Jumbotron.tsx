import React from 'react'
import background from "./Present2.png";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron" style={{marginLeft: "25px", textAlign:"center" }}>
                <h1 className="display-4">Welcome To Present!</h1>
                <p className="lead">Anywhere from simple tutoring classes to large university classes,</p>
                <p className="lead">Present is the best place to manage and run your classrooms.</p>
                <img className="container-fluid" src={background} alt="" />
            </div>
            <div>
            </div>
        </div>
    )
}

export default Jumbotron
