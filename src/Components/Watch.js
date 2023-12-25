import React from 'react'
import "./Watch.css"
import Video from "./Assets/Apple.mp4"
import AppleIcon from '@mui/icons-material/Apple';

function Watch() {

    return (
        <div className='iwatch'>
            <div className="crop-container aspect-ratio-16x9">
                <video autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>

            <div class="content">
                <div id='watchlogo'>
                    <AppleIcon sx={{ fontSize: 46 }} />
                    <div id='watchname'>WATCH</div>
                </div>
                <div id='series'>SERIES 9</div>
                <div id='twoline'>Double tap. A magical new way to use Apple Watch.</div>
                <div className='buttons'>
                    <div id='watchbutton'>
                        <button>Learn more</button>
                    </div>
                    <div id='watchbutton'>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch