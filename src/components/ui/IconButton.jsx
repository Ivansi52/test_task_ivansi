import React from 'react';
import { FiSettings, FiFilter } from 'react-icons/fi';
import './icon-button.css';

export default function IconButton({ icon = 'settings', onClick, ...props }) {
    const IconComponent = icon === 'filter' ? FiFilter : FiSettings;
    
    return (
        <button 
            className="icon-button" 
            onClick={onClick}
            type="button"
            {...props}
        >
            <IconComponent />
        </button>
    );
}

