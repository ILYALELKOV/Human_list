import React from 'react'
import Quality from './quality'
import Bookmark from './bookmark'
import PropTypes from 'prop-types'

const User = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{props.qualities.map((quality) => (
					<Quality key={quality._id} {...quality} />
				))}
			</td>
			<td>{props.profession.name}</td>
			<td>{props.completedMeetings}</td>
			<td>{props.rate} / 5</td>
			<td>
				<Bookmark
					bookmark={props.bookmark}
					onChangeBookmark={props.onChangeBookmark}
					id={props._id}
				/>
			</td>
			<td>
				<button
					className="btn btn-outline-danger"
					onClick={() => props.onDelete(props._id)}
				>
					Удалить
				</button>
			</td>
		</tr>
	)
}

export default User

User.propTypes = {
	name: PropTypes.string.isRequired,
	qualities: PropTypes.array.isRequired,
	profession: PropTypes.object.isRequired,
	completedMeetings: PropTypes.number.isRequired,
	rate: PropTypes.number.isRequired,
	bookmark: PropTypes.bool.isRequired,
	onChangeBookmark: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
}
