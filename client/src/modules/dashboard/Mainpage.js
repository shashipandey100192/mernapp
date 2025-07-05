import React,{useEffect,useState} from 'react'
import axios from 'axios';

function Mainpage() {

    const [allemp, setallemp] = useState([]);
    const myallemp = () => {
        axios.get('http://localhost:8700/allemplist').then((d) => {
            setallemp(d.data.allemp);
        })
    }

    useEffect(() => {
        myallemp();
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card text-bg-primary mb-3 shadow">
                        <div class="card-body">
                            <h5 class="card-title">Total Emp</h5>
                            <p class="card-text h1">{allemp.length}</p>
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