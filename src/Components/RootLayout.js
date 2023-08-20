import React from 'react'
import {Outlet} from "react-router-dom"
import NavBarPanel from "./NavBarPanel"

const RootLayout = () => {
  return (
    <div>
    <NavBarPanel></NavBarPanel>
    
    <main>
        <Outlet></Outlet>
    </main>
    </div>
  )
}

export default RootLayout