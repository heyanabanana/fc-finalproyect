import React from 'react'
import PropTypes from 'prop-types'

const ErrorForm = props => {
    return (
        <span className="text-red text-sm">{props.text}</span>

    )
}

ErrorForm.propTypes = {
text: PropTypes.string
}

export default ErrorForm
