import React, { useState, useEffect, } from "react";
import axios from "axios";

function Attendance(props: any) {

    console.log(props)

    return (
        <div>
            <h5>Present: {props.data}</h5>
        </div>
    )
}

export default Attendance
