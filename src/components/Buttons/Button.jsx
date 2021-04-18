import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const LittleButton = ({type, text, size}) => (
        <button className = {`${type}Btn ${size}Btn`}>
            {text}
        </button>
    )


LittleButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default LittleButton
