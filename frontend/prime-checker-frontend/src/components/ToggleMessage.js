import React from 'react'

function ToggleMessage(props) {
    if (props.show) return <p style={{color: props.color}}>{props.message}</p>
    return null
}

export default ToggleMessage
