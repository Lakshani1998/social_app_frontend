import React from 'react'
import "./topbar.css"
import { Search , Person, Chat, Notifications} from '@mui/icons-material'

export default function Topbar() {
  return (
   <div className="topbarContainer">
    <div className="topbarLeft">
        <span className='logo'>LamaSocial</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search for friends, post or any vedio' className="searchInput" />
        </div>
    </div>
    <div className="topbarRight"></div>
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <img src="/assets/person/6.jpg" alt="" className="topbarImage" />
        </div>
   </div>

  )
}