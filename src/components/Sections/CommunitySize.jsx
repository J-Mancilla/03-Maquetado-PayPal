import React from 'react'
import PropTypes from 'prop-types'

import './CommunitySize.css'

const CommunitySize = ({number}) => {
    const array = number.split('');
    return (
        <div className = 'cmtySize'>
            {
                array.map((num, index) => (
                    <div key = {`cmtyNum${index}`} className = 'numCmty'>{num}</div>
                ))
            }
        </div>
    );
}

CommunitySize.propTypes = {
    number: PropTypes.string.isRequired
}

export default CommunitySize
