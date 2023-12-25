import React from 'react'
import "./Normal.css"
import Norimage from "../Components/Assets/norimage.png"

function Normal() {
    return (
        <div className='normal'>
            <div className='norban'>
            </div>
            <div className='norimg'>
            </div>
            <div className='nordetail'>
                <div id='twoline'><h1>iPhone 15</h1></div>
                <div id='twoline'>New camera. New design. Newphoria.</div>
                <div className='lear'>
                    <div id='blu'>Learn more{'>'}</div><div id='blu'>Buy{'>'}</div>
                </div>
                <div className='bluenor'><img src={Norimage} /></div>
            </div>
        </div>
    )
}

export default Normal