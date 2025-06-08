import React, { Fragment } from 'react'

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
                    <p class="lead">All-in-one solution for your web needs.</p>
                    <a href="#features" class="btn btn-primary btn-lg">Explore Features</a>
                </div>
            </section>

            <div className='container'>
                <div className='row'>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                    <div class="card dome-card">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Payment</h5>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    )
}

export default Applicationint