import React from 'react';

import './DotNavigation.css';

class DotNavigation extends React.Component {
    

    render() {
        return (
            <div id="dot-nav">
                <ul>
                    <li className="awesome-tooltip active" title="Home"><a href="#home"></a></li>
                    <li className="awesome-tooltip" title="About"><a href="#about"></a></li>
                    <li className="awesome-tooltip" title="Projects"><a href="#projects"></a></li>
                    <li className="awesome-tooltip" title="Contact"><a href="#contact"></a></li>
                </ul>
            </div>
        );
    }
}

export default DotNavigation;