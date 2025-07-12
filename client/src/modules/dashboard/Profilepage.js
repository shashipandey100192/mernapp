import React,{useEffect,useState} from 'react'
import { IoChevronBackCircle } from "react-icons/io5";
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Apilist } from '../apis/Myapi';

function Profilepage() {
    const {id} = useParams();
    const mynav = useNavigate();
    const gettoken = localStorage.getItem('settoken');
    const [singleuser, setsingleuser] = useState({});
    const singleuserdata = async () => {
        await axios.get(`${Apilist}/singleuserrecord/${id}`,{headers: {Authorization: `Bearer ${gettoken}`}}).then((d) => {
            console.log(d.data.mydata);
            setsingleuser(d.data.mydata);
        }).catch((err)=>{
           if(err.status===420)
           {
            mynav("/userlogin");
           }
        })
    }

    useEffect(() => {
        singleuserdata();
    }, []);



  return (
    <div className="container py-5 bg-info mt-3">
    <div className="card mb-4">
      <div className="position-relative bg-success">
      
        <img src={singleuser.profile} className="rounded-circle border border-white position-absolute top-100 start-50 translate-middle shadow" alt={singleuser.fullname} style={{width:150}}/>
      </div>
      <div className="card-body text-center pt-5 mt-5">
        <h3 className="card-title" style={{textTransform:'uppercase'}}> {singleuser.fullname}</h3>
        <p className="text-muted h4">Emaill id: {singleuser.email}</p>
        <p className="text-muted h5">Phone No: {singleuser.phone}</p>
        <p className="text-muted h5">DOB: {singleuser.dob}</p>
        <div className="d-flex justify-content-center gap-3 my-3">
          <Link to="/dashboard/employlistpage" className='btn btn-sm btn-success'><IoChevronBackCircle/>Back</Link>
        </div>
        <ul className="list-inline mb-0">
          <li className="list-inline-item mx-3"><strong>120</strong><br/><small>Posts</small></li>
          <li className="list-inline-item mx-3"><strong>5k</strong><br/><small>Followers</small></li>
          <li className="list-inline-item mx-3"><strong>300</strong><br/><small>Following</small></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Profilepage