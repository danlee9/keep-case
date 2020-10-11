import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './styles/DotNavigation.css';
import DotLink from './DotLink';

class DotNavigation extends React.Component {
    

    render() {
        return (
            <div id="dot-nav">
                {/* <ul>
                    <li className="awesome-tooltip active" title="Home"><a href="#home"></a></li>
                    <li className="awesome-tooltip" title="About"><a href="#about"></a></li>
                    <li className="awesome-tooltip" title="Projects"><a href="#projects"></a></li>
                    <li className="awesome-tooltip" title="Contact"><a href="#contact"></a></li>
                </ul> */}
                {/* <ul>
                    <li className="awesome-tooltip active">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >a</Link>
                    </li>
                    <li className="awesome-tooltip">
                        <Link
                            activeClass="active"
                            to="content"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >a</Link>
                    </li>
                    <li className="awesome-tooltip">
                        <Link
                            activeClass="active"
                            to="buy-keep-case"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >a</Link>
                    </li>
                </ul> */}
                {/* <Link
                    activeClass="active"
                    to="content"
                    smooth={true}
                    duration= {500}
                ></Link>
                <Link
                    activeClass="active"
                    to="about"
                    smooth={true}
                    duration= {500}
                ></Link>
                <Link
                    activeClass="active"
                    to="buy-keep-case"
                    smooth={true}
                    duration= {500}
                ></Link> */}
                {/* <a href="#content"></a>
                <a href="#about"></a>
                <a href="#buy-keep-case"></a> */}
                <DotLink to="content" />
                <DotLink to="about" />
                <DotLink to="buy-keep-case" />
            </div>
        );
    }
}

export default DotNavigation;