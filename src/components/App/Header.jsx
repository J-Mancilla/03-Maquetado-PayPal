import React from 'react'
import './Header.css'
import LinkButton from './LinkButton'
import Button from '../Buttons/Button'


const Header = () => (
        <div className = 'header'>
            <div className = 'logo'></div>
            <div>
                <LinkButton  text = 'Personal'/>
                <LinkButton  text = 'Business'/>
                <LinkButton  text = 'Recursos'/>
            </div>
            <div className = 'btnsHead'>
                <Button  text = 'Iniciar sesión' type = 'borderWhite' size = 'small'/>
                <Button  text = 'Abrir cuenta' type = 'fill' size = 'small'/>
            </div>
        </div>
    )


export default Header
