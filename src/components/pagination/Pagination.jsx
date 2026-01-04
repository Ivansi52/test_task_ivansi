import React, { useState } from "react";
import './pagination.css';

export default function Pagination() {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5];

    return (
        <div className="pagination">
            <button
                className="pg-btn"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                {"<"}
            </button>

            {pages.map((p) => (
                <button
                key={p}
                className={`pg-btn ${p === page ? "active" : ""}`}
                onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}

            <button className="pg-ellipse">...</button>
            <button className="pg-btn">30000</button>

            <button className="pg-btn" onClick={() => setPage(page + 1)}>
                {">"}
            </button>
        </div>
    );
}