import React, {useState} from "react";
import API from "../../api";
import 'bootstrap/dist/css/bootstrap.css'
import StatusParty from "./statusParty";
import Pagination from "./pagination";
import UsersTableHead from "./usersTableHead";
import User from "./user";

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDeleteUser = (id) => {
        setUsers((prevState) => prevState.filter(user => user._id !== id))
    }

    const count = users.length
    const pageSize = 4
    // const [currentPage, setCurrentPage] = useState(1)

    // const handlePageChange = (pageIndex) => {
    //     setCurrentPage(pageIndex)
    // }

    return (
        <>
            <StatusParty userList={count}/>
            {count > 0 && (
                <table
                    className={"table"}
                >
                    <UsersTableHead/>
                    <tbody>
                    {users.map(user => (
                        <User
                            key={user._id}
                            {...user}
                            onDelete={handleDeleteUser}
                            onChangeBookmark={handleChangeBookmark}
                        />
                    ))
                    }
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                // currentPage={currentPage}
                // onPageChange={handleP.ageChange}
            />
        </>
    )
}

export default Users