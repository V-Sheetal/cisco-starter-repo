import React from 'react';
import './Style.css';

const Exhibit = ({ heading, children }) => {
    return (
        <div className="exhibit">
            <div className="exhibit-heading">
                <h2>{heading}</h2>
            </div>
            <div className="exhibit-content">{children}</div>
        </div>
    );
};

export default Exhibit;
