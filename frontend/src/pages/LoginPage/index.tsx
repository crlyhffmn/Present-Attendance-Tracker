import React from 'react'
import Login from '../../components/Login'
import Navigation from '../../components/Navigation'
import background from '../../style/pencils.png'


function LoginPage () {
    return (
        <div style={{backgroundImage: `url(${background})`, minHeight:1440}}>
            <Navigation />
            <Login />
        </div>
    )
}

export default LoginPage 
