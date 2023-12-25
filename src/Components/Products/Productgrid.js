import React from 'react'
import "./Productgrid.css"
import Product from './Product'
import AppleIcon from '@mui/icons-material/Apple';
import One from "../Assets/one.png"
import Two from "../Assets/two.png"
import Three from "../Assets/three.png"
import Four from "../Assets/four.png"
import Five from "../Assets/five.png"
import Six from "../Assets/six.png"


function Productgrid() {
    return (
        <div className='wholegrid'>
            <div className='row1'>
                <div className='single'>
                    <Product
                        name="Wonder Awaits"
                        detail="Give the gifts they've been looking forward to all year."
                        button1="Shop"
                        img={One}
                    />
                </div>
                <div className='single'>
                    <Product
                        name="MacBook Pro"
                        detail="Mind-blowing. Head-turning."
                        button1="learn more >"
                        button2="Buy >"
                        img={Two}
                    />
                </div>
            </div>
            <div className='row2'>
                <div className='single'>
                    <Product
                        icon={<AppleIcon sx={{ fontSize: 40 }} />}
                        name="WATCH"
                        detail="Next-level adventure."
                        button1="learn more >"
                        button2="Buy >"
                        img={Three}
                    />
                </div>
                <div className='single hesoyam'>
                    <Product
                        name="iPad"
                        detail="Lovable. Drawable. Magical."
                        button1="learn more >"
                        button2="Buy >"
                        img={Four}
                    />
                </div>
            </div>
            <div className='row3'>
                <div className='single hello'>
                    <Product
                        name="AirPods Pro"
                        detail="Adaptive Audio. Now playing."
                        button1="learn more >"
                        button2="Buy >"
                        img={Five}
                    />
                </div>
                <div className='single'>
                    <Product
                        icon={<AppleIcon sx={{ fontSize: 40 }} />}
                        name="Trade In"
                        detail="Upgrade and save. It's that easy."
                        button1="See what your device is worth >"
                        img={Six}
                    />
                </div>
            </div>
        </div>
    )
}

export default Productgrid