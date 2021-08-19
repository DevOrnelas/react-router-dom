import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav  w-100 justify-content-center fw-bolder ">
                    <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/pricing" class="nav-link" >Pricing</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/team" class="nav-link">Team</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/contact" class="nav-link" >Contact</Link>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
