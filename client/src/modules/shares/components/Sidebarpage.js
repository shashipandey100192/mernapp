import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneDashboard } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

function Sidebarpage() {
    return (

        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item"> <Link to="#" className="nav-link active" aria-current="page">
                <FaHome/>Home
            </Link> </li> 
            <li> <Link to="#" className="nav-link bg-info text-primary mt-2">
               <AiTwotoneDashboard/> Dashboard
            </Link> </li> 
            <li> <Link to="employlistpage" className="nav-link bg-info text-primary mt-2">
                EmployList
            </Link> </li> 
            <li> <Link to="#" className="nav-link bg-info text-primary mt-2">
                Products
            </Link> </li>
             <li> <Link to="#" className="nav-link bg-info text-primary mt-2">
                Customers
            </Link> </li> </ul>
    )
}

export default Sidebarpage