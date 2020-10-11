import React from 'react';

import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div><i className="big bars icon"></i></div>
            <div className="keep-icon">Keep</div>
            <div><i className="big shopping cart icon"></i></div>
        </div>
    );
};

export default Header;

// style={{height: '50px', width: '100%', backgroundColor: 'white', position: 'fixed', textAlign: 'center', zIndex: 99}}