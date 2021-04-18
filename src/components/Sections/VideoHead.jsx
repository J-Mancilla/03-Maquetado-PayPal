import React from 'react'
import './VideoHead.css'
import video from '../../img/vidPay.mp4'

const VideoHead = () => (
        <section className='secVidHead'>
            <video autoPlay muted className = 'fillWidth'>
            {/* <source src="https://www.paypalobjects.com/marketing/web/mx/home/everyday-essentials/MX_everyday_essentials_desktop-v1.mp4" type="video/mp4; "/>         */}
            <source src={video} type="video/mp4; "/>        
                 Your browser does not support the video tag.
            </video>
        </section>
    )


export default VideoHead
