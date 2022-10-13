import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = (props) => {

    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {props.qualities.map(quality => (
                    <Quality key={quality._id} {...quality}/>
                ))
                }
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate} / 5</td>
            <td><Bookmark bookmark={props.bookmark} onChangeBookmark={props.onChangeBookmark} id={props._id}/></td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => props.onDelete(props._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

export default User