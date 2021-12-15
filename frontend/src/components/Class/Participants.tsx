import React from 'react'

function Participants(props: any) {
    return (
        <div>
            <h5>• {props.data.firstName + " " + props.data.lastName}</h5>
        </div>
    )
}

export default Participants
