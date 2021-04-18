import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Buttons/Button'

import './InfoSection.css'

const InfoSection = ({title, text, buttonText, image, direction}) => (
        <section  className = {`infoSection ${direction}InfoSection`} >
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <Button  text = {buttonText} type = 'borderBlue'  size = 'large'/>
            </div>
            <img src = {image}  alt = 'imgPaypal'/>
        </section>
    );


InfoSection.propTypes = {
    title:      PropTypes.string.isRequired,
    text:       PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    image:      PropTypes.string.isRequired,
    direction:  PropTypes.string.isRequired
}

export default InfoSection
