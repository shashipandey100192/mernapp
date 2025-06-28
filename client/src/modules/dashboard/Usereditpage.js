import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Usereditpage() {
    const navigation = useNavigate();

    const {id} = useParams();


const [user,setuser]=useState({
  fullname:"",
  email:"",
  phone:"",
  dob:"",
  pass:"",
  profil:""
});


    const singleuserdata = async () => {
        await axios.get(`http://localhost:8700/singleuserrecord/${id}`).then((d) => {
            console.log(d.data.mydata);
            setuser(d.data.mydata);
        })
    }

    useEffect(() => {
        singleuserdata();
    }, []);


 const updatefield = (e)=>{
        const {name,value} = e.target;
        setuser((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }

const updateuser = async ()=>{
 
      const {fullname,email,phone,pass,dob,profile}=user;
    const postdata = await fetch(`http://localhost:8700/userupdate/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                     fullname,email,phone,pass,dob,profile
                })
            })
            const data = await postdata.json();
            console.log(data);
            if(data.status===251)
            {
              toast.success("successfully update user details ",{position: "top-left",autoClose: 2000});
              setTimeout(()=>{
                navigation("/dashboard/employlistpage");
              },2000)
            }
          
    
}




  return (
    <div className='abc'>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='container-fluid bg-white p-5'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h3>User Edit Page</h3>
                <ToastContainer />
                <hr/>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" value={user.fullname} name='fullname' onInput={updatefield}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Email Id</label>
                  <input type="email" className="form-control" value={user.email} name='email' onInput={updatefield}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Phone No</label>
                  <input type="text" className="form-control" value={user.phone} name='phone' onInput={updatefield}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">DOB</label>
                  <input type="date" className="form-control" value={user.dob} name='dob' onInput={updatefield}/>
                </div>
              </div>

              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" value={user.pass} name='pass' onInput={updatefield}/>
                </div>
              </div>

                <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Profile Pic</label>
                  <input type="text" className="form-control" placeholder='url only' value={user.profile} name='profile' onInput={updatefield}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <input type='button' value="Update" className='btn btn-success' onClick={updateuser}/>
                  <input type='reset' value="Cancel" className='btn btn-danger ms-3'/>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Usereditpage