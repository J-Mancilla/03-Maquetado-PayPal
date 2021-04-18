import React from 'react'
import PropTypes from 'prop-types'

import './LinkBtn.css'

const LinkBtn = ({text, bold}) => {
    const classCss = bold ? 'boldLinkButton' : ''
    return (
        <div className = {`linkButton ${classCss}`}>
            {text}
        </div>
    )
}

LinkBtn.propTypes = {
    text: PropTypes.string.isRequired,
    bold: PropTypes.bool
}

export default LinkBtn
