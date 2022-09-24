import React, {useState} from "react";
import API from "../../api";
import 'bootstrap/dist/css/bootstrap.css'
import Qualities from "./Qualities";
import StatusParty from "./statusParty";
import Pagination from "./Pagination";
import UsersTableHead from "./usersTableHead";

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

    const bookmark = (bookmark, id) => {
        setUsers(users.map(elem => elem._id === id ? {...elem, bookmark: true} : elem))
        if (bookmark === true) {
            return setUsers(users.map(elem => elem._id === id ? {...elem, bookmark: false} : elem))
        }
        // setUsers(prevState=> prevState.map(elem => id === elem._id ? {...elem, bookmark:true} : elem))
    }

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
                    {
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>

                                <td>
                                    {/*    {user.qualities.map(elem => (*/}
                                    {/*    <span*/}
                                    {/*        key={elem._id}*/}
                                    {/*        className={"m-1 badge bg-" + elem.color}*/}
                                    {/*    >*/}
                                    {/*        {elem.name}*/}
                                    {/*    </span>*/}
                                    {/*))}*/}
                                    <Qualities list={user}/>
                                </td>

                                <td>{user.profession.name}</td>

                                <td>{user.completedMeetings}</td>

                                <td>{user.rate} / 5</td>

                                <td>
                                    <span
                                        className={"bi bi-star" + (user.bookmark === true
                                                ? "-fill"
                                                : ""
                                        )}
                                        onClick={() => bookmark(user.bookmark, user._id)}
                                    >
                                    </span>
                                </td>

                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
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