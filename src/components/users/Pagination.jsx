import React from 'react';
import _ from "lodash"

const Pagination = (itemsCount, pageSize, onPageChange) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null
    const pages = _.range(1, pageCount + 1)

    return (
        <nav>
            <ul
                className="pagination">
                {pages.map((page) =>
                    <li
                        key={"page_" + page}
                        className="page-item"
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                            href="/#"
                        >
                            {page}
                        </a>
                    </li>)}

            </ul>
        </nav>
    );
};

export default Pagination;







