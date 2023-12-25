import React from 'react'
import "./End.css"

function End() {

    const date = new Date()
    const yoyo = date.getFullYear()

    return (
        <div className='end'>
            <p>Copyright © {yoyo} Apple Inc. All rights reserved.</p>
        </div>
    )
}

export default End