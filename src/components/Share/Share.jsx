import React from 'react'
import "./share.css"
import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'

export default function Share() {
  return (
    <div className='shareContainer'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="/assets/person/11.jpg" alt="" />
            <input placeholder='What in your mind' className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
           <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo</span>
                </div>

                <div className="shareOption">
                    <Label htmlColor='Blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag  </span>
                </div>

                <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Locations  </span>
                </div>

                <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings  </span>
                </div>

            </div> 
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
