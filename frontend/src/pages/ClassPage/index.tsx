import React from 'react'
import { useLocation } from 'react-router';
import Class from '../../components/Class';
import Navigation from "../../components/Navigation";
import '../../style/Background.css'


function Course() {
    const { search } = useLocation()
    let id: any = search.match(/\d/g);
    id = id.join("");
    console.log(id)

    return (
        <div id="background">
            <Navigation />
            <Class props={id}/>
        </div>
    )
}

export default Course
