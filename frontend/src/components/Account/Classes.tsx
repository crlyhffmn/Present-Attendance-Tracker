import React from 'react'
import { Link } from 'react-router-dom';

function Classes(props: any) {

    function onClickHandler() {
        localStorage.setItem('currentCourseId', props.data.id);
    }

    return (
        <div className="row">
            {(
                <div className="col-sm-12 mb-3">
                    <div className="card h-100 text-center text-size-large" style={{ backgroundColor: "rgb(228, 111, 3)"}}>
                        <div className="card-body">
                            <h4><a className="text-dark" href={"/Class?id=" + props.data.id} style={{ textDecoration: "none" }} onClick={onClickHandler}>{props.data.courseName}</a></h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Classes;
