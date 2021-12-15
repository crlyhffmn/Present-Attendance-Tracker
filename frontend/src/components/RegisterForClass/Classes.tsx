import React from 'react'

function Classes(props: any) {
    return (
        <div className="col-sm-3">
            <div className="card h-100 text-center text-size-large" style={{ backgroundColor: "rgb(228, 111, 3)"}}>
                <div className="card-body">
                    <h5>{props.data.courseName} <br /> Course Id: {props.data.id}</h5>
                </div>
            </div>
        </div>
    )
}

export default Classes
