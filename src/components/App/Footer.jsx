import React from 'react'

import LinkBtn from '../Buttons/LinkBtn'

import './Footer.css'

const Footer = () => (
        <section className = 'footerPayPal'>
            <div className = 'above'>
                <div className = 'boldOptions'>
                    {boldOpc.map((text, index) => (
                        <LinkBtn text = {text} bold = {true} key = {`opcBoldFoot${index}`}  />
                    ))}
                </div>
                <p>🇲🇽</p>
            </div>
            <div>
                <div className = 'options1'>
                    {options.map((text, index) => (
                        <LinkBtn text = {text} key = {`opc1Foot${index}`}  />
                    ))}
                </div>
                <div className = 'options2'>
                    {options2.map((text, index) => (
                        <LinkBtn text = {text} key = {`opc2Foot${index}`}  />
                    ))}
                </div>
            </div>
        </section>
    );

const boldOpc  = ['Ayuda', 'Contáctanos', 'Comisiones', 'Seguridad', 'Apps', 'Comprar', 'Donar', 'Opinión'];
const options  = ['Sobre PayPal', 'Newsroom', 'Empleos', 'Mapa del sitio', 'Desarrolladores', 'Programa de Partners'];
const options2 = ['© 1999–2021', 'Accesibilidad', 'Privacidad', 'Acuerdos legales'];


export default Footer
