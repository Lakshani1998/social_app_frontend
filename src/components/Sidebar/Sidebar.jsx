import React from 'react'
import "./sidebar.css"
import {RssFeed,Chat,PlayCircle,Groups,Bookmarks,Help,Work,InsertInvitation, School} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed  className = "sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className = "sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircle classname = 'sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Groups classname = 'sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmarks classname = 'sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <Help className = "sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <Work className = "sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <InsertInvitation className = "sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className = "sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
