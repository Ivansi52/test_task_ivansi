import { MdKeyboardArrowUp } from "react-icons/md";

export default function TableHeader({columns, sortField, sortDir, onSort}) {
    return (
        <thead>
        <tr>
            {columns.map((col) => {
                const isActive = sortField === col.key;

                return (
                    <th
                        key={col.key}
                        onClick={() => col.sortable && onSort(col.key)}
                        className={col.sortable ? "sortable" : ""}
                    >
                        <div className="th-inner">
                            {col.sortable && (
                                <MdKeyboardArrowUp
                                    className={`sort-arrow ${
                                        isActive ? "active" : ""
                                    } ${isActive && sortDir === "desc" ? "desc" : ""}`}
                                />
                            )}

                            <span className="th-text">{col.title}</span>
                        </div>
                    </th>
                );
            })}
        </tr>
        </thead>
    );
}
