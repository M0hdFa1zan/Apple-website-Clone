import React from 'react'
import Links from './Links'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="subs">
                <p id='title'>Subscribe to Apple.</p>
                <hr />
                <div id='inpu'><input id='inp' type="mail" placeholder="Email address" /></div>
                <div id='check'><input type="checkbox" id="checkb" />
                    <label for="check">Subscribe to receive communications from Apple. By subscribing, you confirm you have read and understood our privacy policy.</label>
                </div>
            </div>
            <div className='one'>
                <Links
                    title="Shop and Learn"
                    a="Store"
                    c="iPad"
                    d="Watch"
                    e="AirPods"
                    f="TV & Home"
                />
            </div>
            <div className='two'>
                <Links
                    title="Apple Store"
                    a="Find a Store"
                    b="Genius Bar"
                    c="Today at Apple"
                    d="Apple Camp"
                    e="Apple Trade In"
                />
            </div>
            <div className='three'>
                <Links
                    title="Account"
                    a="Live Assistance"
                    b="Manage Your Apple ID"
                    c="iCloud.com"
                    d="Apple Store Account"
                    e="Video consultation"
                />
            </div>
            <div className='sust'>
                <p id='title'>Sustainability</p>
                <hr />
                <p id='suspara'>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
            </div>
            <div className='four'>
                <Links
                    title="Policies"
                    a="Our Story"
                    b="Foundation"
                    c="Careers"
                    d="Privacy policy"
                    e="Accessibility"
                    f="Cookie Policy"
                />
            </div>
            <div className='five'>
                <Links
                    title="About Apple"
                    a="Newsroom"
                    b="Apple Leadership"
                    c="Career Opportunities"
                    d="Investors"
                    e="Contact Apple"
                />
            </div>
        </div>
    )
}

export default Footer