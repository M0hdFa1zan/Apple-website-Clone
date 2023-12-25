import React from 'react'
import "./Product.css"

function product(props) {
    return (
        <div className='singlee'>
            <div className='sindetail'>
                <div id='sinlines'><div>{props.icon}</div><div><h1>{props.name}</h1></div></div>
                <div id='sinlines'>{props.detail}</div>
                <div className='sinlearn'>
                    <div id='sinblue'>{props.button1}</div><div id='sinblue'>{props.button2}</div>
                </div>
            </div>
            <div className='sinimg'>
                <img src={props.img} alt='' />
            </div>
        </div>
    )
}

export default product