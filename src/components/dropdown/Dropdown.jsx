import React, { useState, useRef, useEffect } from "react";
import './dropdown.css'

const OPTIONS = [
    "Дизайнер",
    "Front end developer",
    "Back end developer",
    "Full Stack Developer"
];

export default function Dropdown({ initial = "Дизайнер"}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(initial);
    const ref = useRef();

    useEffect(() => {
        function onDoc(e) {
                setOpen(false);
            }
        }
        document.addEventListener("click", onDoc);
        return () => document.removeEventListener("click", onDoc);
    }, []);

    return (
        <div className="dropdown" ref={ref}>
            <button className="dropdown-btn" onClick={() => setOpen((s) => !s)}>
                <span className="label">{selected}</span>
                <span className="arrow">{ open ? "▲" : "▾"}</span>
            </button>
            {open && (
                <ul className="dropdown-list">
                    {OPTIONS.map((opt) => (
                        <li
                            key={opt}
                            className={`dropdown-item${opt === selected ? "selected" : ""}`}
                            onClick={() => {
                                setSelected(opt);
                                setOpen(false);
                            }}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
