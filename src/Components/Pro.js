import React from 'react'
import "./Pro.css"
import Proimage from "../Components/Assets/proimage.png"
import Mediapro from "../Components/Assets/mediapro.jpg"

function Pro() {
    return (
        <div className='proad'>
            <div className='proimg'>
            </div>
            <div className='prodetail'>
                <div id='twolines'><h1>iPhone 15 Pro</h1></div>
                <div id='twolines'>Titanium. So strong. So light. So Pro.</div>
                <div className='learn'>
                    <div id='blue'>Learn more{'>'}</div><div id='blue'>Buy{'>'}</div>
                </div>
                <div className='blackpro'><img src={Proimage} /></div>
                <div className='mediapro'><img src={Mediapro} /></div>
            </div>
        </div>
    )
}

export default Pro