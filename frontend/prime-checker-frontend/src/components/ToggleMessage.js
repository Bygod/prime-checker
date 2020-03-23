import React from 'react'

function ToggleMessage(props) {
    if (props.show) return <p className={props.type}><b>{props.message}</b></p>
    return null
}

export default ToggleMessage
