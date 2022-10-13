import React from "react";

const Bookmark = ({bookmark, onChangeBookmark, id}) => {

    const getIconClass = () => {
        return bookmark ? '-fill' : ""
    }

    return (
        <span
            className={`bi bi-star${getIconClass()}`}
            onClick={() => onChangeBookmark(id)}
        >
        </span>
    )
}

export default Bookmark