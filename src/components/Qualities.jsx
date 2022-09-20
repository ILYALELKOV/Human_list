import React from "react";

const Qualities = (props) => {
    return (
        <>
            {props.list.qualities.map(elem => (
                <span
                    key={elem._id}
                    className={"m-1 badge bg-" + elem.color}
                >
                {elem.name}
                </span>
            ))}
        </>
    )
}

export default Qualities