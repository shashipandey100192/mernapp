import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/global.css";
import Applicationint from './modules/Applicationint';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Userloginpage from './modules/users/usersauth/Userloginpage';
import UserRegistorpage from './modules/users/usersauth/UserRegistorpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Applicationint/>}></Route>
        <Route path='userlogin' element={<Userloginpage/>}></Route>
        <Route path='userregistor' element={<UserRegistorpage/>}></Route>
        

      </Routes>

    </BrowserRouter>
    

  </React.StrictMode>
);
