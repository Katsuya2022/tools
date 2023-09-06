import React from 'react'
import { sidebarData } from '../sidebarData'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='sidebarList'>
        {sidebarData.map((data, key) => {
          return(
            <li key={key} className='sidebarRow' onClick={() => {window.location.pathname = data.link}}>
              <div id='icon'>{data.icon}</div>
              <div id='title'>{data.title}</div>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}

export default Sidebar
