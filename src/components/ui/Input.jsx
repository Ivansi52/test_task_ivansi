import React from 'react';
import "./input.css";

export default function Input({ placeholder }) {
    return (
        <div className="input-wrap">
            <input className="input" placeholder={placeholder} />
            <button className="eye" type="button">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.4996 12C14.4996 13.3807 13.3803 14.5 11.9996 14.5C10.6189 14.5 9.49961 13.3807 9.49961 12C9.49961 10.6193 10.6189 9.50001 11.9996 9.50001C13.3803 9.50001 14.4996 10.6193 14.4996 12Z"
                        stroke="#FAFCFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.04816 12C5.11005 8.61907 8.26862 6.16667 12 6.16667C15.7314 6.16667 18.8899 8.6191 19.9518 12C18.8899 15.3809 15.7314 17.8333 12 17.8333C8.26862 17.8333 5.11003 15.3809 4.04816 12Z"
                        stroke="#FAFCFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}
