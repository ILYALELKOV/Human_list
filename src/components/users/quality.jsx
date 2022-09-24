import React from "react";

const Quality = (props) => {
    return (
        <span className={"m-1 badge bg-" + props.color}>
            {props.name}
        </span>
    )
}

export default Quality