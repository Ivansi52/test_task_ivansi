import React from 'react';
import './button.css';

export default function Button({ children, variant = "default", icon}) {
    return (
        <button className={`btn ${variant === "primary" ? "primary" : ""} `}>
            {icon && <span className="btn-icon">{icon}</span>}
            <span>{children}</span>
        </button>
    )
}