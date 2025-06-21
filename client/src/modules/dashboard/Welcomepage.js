import React, { Fragment } from 'react'
import Navbarpage from '../shares/components/Navbarpage'
import Sidebarpage from '../shares/components/Sidebarpage'
import Mainpage from './Mainpage'
import { Outlet } from 'react-router-dom'

function Welcomepage() {
  return (
    <Fragment>
    <Navbarpage></Navbarpage>
    <div className='container-fluid code-m'>
        <div className='row'>
            <div className='col-md-2'>
                <Sidebarpage></Sidebarpage>
            </div>
            <div className='col-md-10'>
               <Outlet></Outlet>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Welcomepage