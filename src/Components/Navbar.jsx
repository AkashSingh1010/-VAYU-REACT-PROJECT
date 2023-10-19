import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-transparent">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={`/home`} class="nav-link" aria-current="page" href="2">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`/about`} class="nav-link" aria-current="page" href="2">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`/service`} class="nav-link" href="3">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`/story`} class="nav-link" href="4">Story</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`/contact`} class="nav-link" href="5">Contact</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar