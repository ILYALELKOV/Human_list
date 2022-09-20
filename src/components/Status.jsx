import React from "react";

const Status = (props) => {

    const renderMessage = (number) => {
        const last = Number(number.toString().slice(-1))

        if ((last > 1 && last < 5 && number < 5) || (number > 20 && last > 1 && last < 5)) {
            return `${number} человека тусанет с тобой сегодня`
        } else {
            return `${number} человек тусанет с тобой сегодня`
        }
    }

    return (
        <>
            <h2>
                <span
                    className={"badge " + (props.userList.length > 0
                        ? "bg-primary m-2"
                        : "bg-danger m-2")}
                >
                {props.userList.length > 0 ? renderMessage(props.userList.length) : "Никто с тобой не тусанет"}
                </span>
            </h2>
        </>
    )
}

export default Status