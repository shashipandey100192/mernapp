import React, { useState } from 'react'

function UserRegistorpage() {

const [user,setuser]=useState({
  fullname:"",
  email:"",
  phone:"",
  dob:"",
  pass:"",
  profil:""
});



 const updatefield = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setuser((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }




const registor = ()=>{
  console.log(user);
}







  return (
    <div className='abc'>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='container-fluid bg-white p-5'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h3>User Registor Page</h3>
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
                  <input type='button' value="Regustir Now" className='btn btn-success' onClick={registor}/>
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

export default UserRegistorpage