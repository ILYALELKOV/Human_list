import React from 'react'
import PropTypes from 'prop-types'

const Quality = (props) => {
	return <span className={'m-1 badge bg-' + props.color}>{props.name}</span>
}

export default Quality

Quality.propTypes = {
	color: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}
