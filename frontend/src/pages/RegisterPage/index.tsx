import React from 'react'
import Navigation from '../../components/Navigation'
import Register from '../../components/Register/Index'
import background from '../../style/pencils.png'


function RegisterPage() {
    return (
        <div style={{backgroundImage: `url(${background})`, minHeight:1440}}>
            <Navigation />
            <Register />            
        </div>
    )
}

export default RegisterPage
