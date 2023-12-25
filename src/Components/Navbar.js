import React from 'react'
import "./Navbar.css"
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Navbar() {
    return (
        <div className='navb'>
            <div className='innav'>
                <div className='aplogo'><AppleIcon /></div>
                <div id='navitem'>Store</div>
                <div id='navitem'>Mac</div>
                <div id='navitem'>iPad</div>
                <div id='navitem'>iPhone</div>
                <div id='navitem'>Watch</div>
                <div id='navitem'>AirPods</div>
                <div id='navitem'>TV & Home</div>
                <div id='navitem'>Entertainment</div>
                <div id='navitem'>Accessories</div>
                <div id='navitem'>Support</div>
                <div id='searchico'><SearchIcon /></div>
                <div id='cartico'><WorkOutlineIcon /></div>
                <div id='equal'>=</div>
            </div>
        </div>
    )
}

export default Navbar