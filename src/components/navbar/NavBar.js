import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" alt="logo" src="img/logo.png"/>
            <img src="img/profile.png" alt="profile" className="profile"/>
        </div>
    )
}

export default NavBar
