import React from 'react'

function Mainpage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card text-bg-primary mb-3 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Total Emp</h5>
                            <p class="card-text h1">50</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-warning mb-3 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Total Male Emp</h5>
                            <p class="card-text h1">50</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-info mb-3 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Total Female Emp</h5>
                            <p class="card-text h1">50</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-danger mb-3 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Others Emp</h5>
                            <p class="card-text h1">50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainpage