import React from 'react'
import PropTypes from 'prop-types'

import './LinkButton.css'

const LinkButton = ({text}) => (
        <div className = 'linkButtonHeader'>
            <p>{text.toUpperCase()+' ⌵'}</p>
        </div>
    )


LinkButton.propTypes = {
    text : PropTypes.string.isRequired
}

export default LinkButton
