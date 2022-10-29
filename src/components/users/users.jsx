import React, { useEffect, useState } from 'react'
import API from '../../api'
import Pagination from './pagination'
import UsersTableHead from './usersTableHead'
import User from './user'
import { paginate } from '../../utils/paginate'
import GroupList from './groupList'
import StatusParty from './statusParty'

const Users = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const handleDeleteUser = (id) => {
		setUsers((prevState) => prevState.filter((user) => user._id !== id))
	}

	const handleChangeBookmark = (id) => {
		setUsers((prevState) =>
			prevState.map((user) => {
				if (user._id === id) {
					return { ...user, bookmark: !user.bookmark }
				}
				return user
			})
		)
	}

	const [professions, setProfession] = useState()

	useEffect(() => {
		API.professions.fetchAll().then((data) => setProfession(data))
	}, [])

	useEffect(() => {
		API.users.fetchAll().then((data) => {
			setUsers(data)
			setIsLoading(false)
		})
	}, [])

	const handleProfessionSelect = (item) => {
		setSelectedProf(item)
	}

	const pageSize = 4
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedProf, setSelectedProf] = useState()

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

	const filteredUsers = selectedProf
		? users.filter((user) => user.profession === selectedProf)
		: users
	const count = filteredUsers.length

	const userCrop = paginate(filteredUsers, currentPage, pageSize)

	const clearFilter = () => {
		setSelectedProf()
	}

	useEffect(() => {
		if (filteredUsers.length < pageSize) {
			setCurrentPage(1)
		} else if (userCrop.length === 0) {
			setCurrentPage(currentPage - 1)
		}
	}, [userCrop])

	if (isLoading) {
		return 'Loading...'
	}

	return (
		<div className='d-flex container-lg'>
			{professions && (
				<div className='mt-2 mx-3'>
					<GroupList
						selectedItem={selectedProf}
						items={professions}
						onItemSelect={handleProfessionSelect}
					/>
					<button
						onClick={clearFilter}
						className='btn btn-outline-danger mt-2 btn-lg'
					>
						Очистить
					</button>
				</div>
			)}
			<div>
				<StatusParty userList={count} />
				{count > 0 && (
					<table className={'table'}>
						<UsersTableHead />
						<tbody>
						{userCrop.map((user) => (
							<User
								key={user._id}
								{...user}
								onDelete={handleDeleteUser}
								onChangeBookmark={handleChangeBookmark}
							/>
						))}
						</tbody>
					</table>
				)}
				<div className='d-flex justify-content-center'>
					<Pagination
						itemsCount={count}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Users
