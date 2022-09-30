import React from "react";
import Quality from "./quality";

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
            <td></td>
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