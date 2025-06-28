import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/global.css";
import Applicationint from './modules/Applicationint';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Userloginpage from './modules/users/usersauth/Userloginpage';
import UserRegistorpage from './modules/users/usersauth/UserRegistorpage';
import Welcomepage from './modules/dashboard/Welcomepage';
import Mainpage from './modules/dashboard/Mainpage';
import Employlistpage from './modules/dashboard/Employlistpage';
import Profilepage from './modules/dashboard/Profilepage';
import Usereditpage from './modules/dashboard/Usereditpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Applicationint/>}></Route>
        <Route path='userlogin' element={<Userloginpage/>}></Route>
        <Route path='userregistor' element={<UserRegistorpage/>}></Route>
        <Route path='dashboard' element={<Welcomepage/>}>
          <Route path='' element={<Mainpage/>}></Route>
          <Route path='employlistpage' element={<Employlistpage/>}></Route>
          <Route path='employlistpage/profile/:id' element={<Profilepage/>}></Route>
           <Route path='employlistpage/edituser/:id' element={<Usereditpage/>}></Route>
        
        
        </Route>
        

      </Routes>

    </BrowserRouter>
    

  </React.StrictMode>
);
