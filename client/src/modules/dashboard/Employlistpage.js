import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdOutlinePreview, MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function Employlistpage() {
    const gettoken = localStorage.getItem('settoken');
    const [allemp, setallemp] = useState([]);

    const myallemp = () => {

        axios.get('http://localhost:8700/allemplist',{headers: {Authorization: `Bearer ${gettoken}`}}).then((d) => {
            console.log(d.data.allemp);
            setallemp(d.data.allemp);
        })
     

    }

    useEffect(() => {
        myallemp();
    }, []);





    const deleterecord = (id) => {
        if (window.confirm("do you wnat to delete")) {
            axios.delete(`http://localhost:8700/deleterecord/${id}`).then((d) => {
                console.log(d);
                toast.success("record delete successfully");
                myallemp();
            });
        }
        else {
            toast.warn("Thanks");
        }
    }






    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <p>List of Employee</p>
                </div>
                <div className='col-12'>
                    <ToastContainer />
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">MongodbId</th>
                                <th scope="col">Emp Id</th>
                                <th scope="col">FullName</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Dob</th>
                                <th scope="col">Profile Pic</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allemp.map((emp, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{emp._id}</th>
                                        <td>{++index}</td>
                                        <td>{emp.fullname}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.dob}</td>
                                        <td>
                                            <img src={emp.profile} width={30} height={20} alt='skdjf' />
                                        </td>
                                        <td>{emp.phone}</td>
                                        <td>
                                            <Link to={'profile/' + emp._id} class="badge text-bg-primary code-i"><MdOutlinePreview /></Link>
                                            <Link to={'edituser/' + emp._id} class="badge text-bg-warning ms-2 code-i"><FaUserEdit /></Link>
                                            <span class="badge text-bg-danger ms-2 code-i" onClick={() => deleterecord(emp._id)}><MdDeleteForever /></span>

                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employlistpage