import React, {useState} from "react";
import API from "../../api";
import 'bootstrap/dist/css/bootstrap.css'
import StatusParty from "./statusParty";
import Pagination from "./Pagination";
import UsersTableHead from "./usersTableHead";
import User from "./user";

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDeleteUser = (id) => {
        setUsers((prevState) => prevState.filter(user => user._id !== id))
    }

    // const renderMessage = (number) => {
    //     const last = Number(number.toString().slice(-1))
    //
    //     if ((last > 1 && last < 5 && number < 5) || (number > 20 && last > 1 && last < 5)) {
    //         return `${number} человека тусанет с тобой сегодня`
    //     } else {
    //         return `${number} человек тусанет с тобой сегодня`
    //     }
    // }


    const count = users.length
    const pageSize = 4

    const handlePageChange = (pageIndex) => {
        console.log(pageIndex)
    }

    return (
        <>
            <StatusParty userList={users.length}/>
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
                        />
                    ))
                    }
                    </tbody>
                </table>
            )}
            <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange}/>
        </>
    )
}

export default Users