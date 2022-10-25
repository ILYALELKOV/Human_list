import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ bookmark, onChangeBookmark, id }) => {
	const getIconClass = () => {
		return bookmark ? '-fill' : ''
	}

	return (
		<span
			className={`bi bi-star${getIconClass()}`}
			onClick={() => onChangeBookmark(id)}
		></span>
	)
}

export default Bookmark

Bookmark.propTypes = {
	bookmark: PropTypes.bool.isRequired,
	onChangeBookmark: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
}
