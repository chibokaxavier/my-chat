import React from 'react'
import Sidebar from './sidebar'

function Layout({children}) {
  return (
    <div className='flex' >
<Sidebar/>
<div></div>
{children}

    </div>
  )
}

export default Layout