import React from 'react'

function Classes(props: any) {
    return (
        <div className="row">
            {(
                <div className="col-sm-12 mb-3">
                    <div className="card h-100 text-center text-size-large" style={{ backgroundColor: "rgb(228, 111, 3)" }}>
                        <div className="card-body">
                            <h4>{props.data.courseName}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Classes;
