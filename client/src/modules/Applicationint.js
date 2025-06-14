import React, { Fragment } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";
import {Link} from "react-router-dom"

function Applicationint() {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MyApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mainNav" aria-controls="mainNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="mainNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


            <section id="home" class="py-5 text-center bg-light">
                <div class="container">
                    <h1 class="display-4">Welcome to MyApp!</h1>
                </div>
            </section>

            <div className='container'>
                <div className='row justify-content-center'>
                    <Link class="card dome-card col-md-2" to="userlogin">
                        <div class="card-body">
                            <h1><FcBusinessman/></h1>
                            <h5 class="card-title fw-bold">User Login</h5>
                        </div>
                    </Link>
                    <Link class="card dome-card col-md-2" to="adminlogin">
                        <div class="card-body">
                            <h1><FaUsers/></h1>
                            <h5 class="card-title fw-bold">Admin</h5>
                        </div>
                    </Link>
                    
                </div>
            </div>



        </Fragment>
    )
}

export default Applicationint