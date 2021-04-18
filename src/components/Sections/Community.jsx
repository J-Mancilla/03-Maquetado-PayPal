import React from 'react'
import Button from '../Buttons/Button'

import './Community.css'
import CommunitySize from './CommunitySize'

const Community = () => (
        <section className = 'communitySection'>
            <h3>Únete a la comunidad global de más de 250 millones de usuarios que compran, envían y reciben dinero de manera segura todos los días con PayPal.</h3>
            <Button text = 'Abrir cuenta gratis' type = 'fill' size = 'large'  />
            <CommunitySize  number = '305009964'/>
        </section>
    );


export default Community
