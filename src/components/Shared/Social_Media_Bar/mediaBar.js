/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './mediaBar.css'

function mediaBar() {
    return (
        <div >

            <div class="icon-list">
                <a href="https://www.instagram.com/indosculp/?utm_medium=copy_link" class="instagram">
                    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" width="40" height="40" alt='' />
                </a>
                 
                <a href="https://www.facebook.com/indosculpgearbox" class="facebook">
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" width="40" height="40" alt='' />
                </a>
                 
                <a href="/" class="twitter">
                    <img src="https://img.icons8.com/fluency/48/000000/twitter.png" width="40" height="40" alt='' />
                </a>
                 
                <a href="https://www.linkedin.com/company/indosculp/" class="linkedin">
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" width="40" height="40" alt='' />
                </a>
                 
                <a href="https://www.youtube.com/channel/UCBILQdq25WgQSXE7fPOt7-Q" class="youtube">
                    <img src="https://img.icons8.com/color/50/000000/youtube-play.png" width="40" height="40" alt='' />
                </a>
            </div>

            <div class="icon-list2">
                <a href="/" class="contact">
                    <span>CONTACT US | </span>
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/gmail.png" width="30" height="30" alt='' />
                </a>
            </div>

        </div>
    )
}

export default mediaBar
