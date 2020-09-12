import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Image } from 'semantic-ui-react'
import "./App.css";

import { addSections, arrowKeyPress } from '../actions';

import About from './About';
import KeepCaseContent from './KeepCaseContent';
import BuyKeepCase from './BuyKeepCase';
import DotNavigation from "./DotNavigation";

function smoothScroll(offset) {
    console.log('offset')
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
    
    return new Promise((resolve, reject) => {
        const failed = setTimeout(() => {
            if (Math.round(window.pageYOffset) === offset) {
                window.removeEventListener("scroll", scrollHandler);
                console.log('timeout resolved')
                resolve();
            } else {
                reject();
            }
        }, 2000);
  
        const scrollHandler = () => {
            console.log(offset);
            console.log(window.pageYOffset);
            if (window.pageYOffset === offset) {
                window.removeEventListener("scroll", scrollHandler);
                clearTimeout(failed);
                console.log('first resolved')
                resolve();
            }
        };

        if (Math.round(window.pageYOffset) === offset) {
            clearTimeout(failed);
            console.log('second resolved resolved')
            resolve();
        } else {
            console.log('add scroll listener')
            window.addEventListener("scroll", scrollHandler);
        }
    });
}

class App extends React.Component {
    state = {
        offset: window.pageYOffset || document.documentElement.scrollTop,
        scrolling: false,
        scrollDirection: null,
        scrollTimeout: null,
    }

    componentDidMount() {
        this.props.addSections();
    }

    componentWillMount() {
        window.addEventListener('keydown', this.arrowKeyPress);
        // window.addEventListener('scroll', this.mouseScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.arrowKeyPress);
        // window.removeEventListener('scroll', this.mouseScroll);
    }

    arrowKeyPress = e => {
        if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
            e.preventDefault();
            const direction = e.key;
            const { sections, position } = this.props;
            if (direction == 'ArrowUp') {
                if (position != 0) {
                    scroll({
                        top: sections[position - 1].offset,
                        behavior: 'smooth'
                    });
                }
            } else {
                if (position != sections.length - 1) {
                    scroll({
                        top: sections[position + 1].offset,
                        behavior: 'smooth'
                    });
                }
            }
            this.props.arrowKeyPress(direction);
        }
    }

    mouseScroll = e => {
        // console.log(e);
        // e.preventDefault();
        if (this.state.scrolling) {
            console.log('state scrolling');
            return;
        }
        const { sections, position } = this.props;        
        
        let newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (newScrollTop > this.state.offset) {
            console.log('scrolldown')
            let direction = 'ArrowDown';
            if (position != sections.length - 1) {
                this.setState({
                    scrolling: true,
                    scrollDirection: direction
                });
                // scroll({
                //     top: sections[position + 1].offset,
                //     behavior: 'smooth'
                // });
                // this.setState({
                //     scrolling: false,
                //     offset: sections[position + 1].offset
                // });
                let p = smoothScroll(sections[position + 1].offset)
                p.then(() => {
                    this.setState({
                        scrolling: false,
                        offset: sections[position + 1].offset
                    });
                    this.props.arrowKeyPress(this.state.scrollDirection);
                })
            }
            
            // this.props.arrowKeyPress(direction);
        } else {
            console.log('scrollup');
            let direction = 'ArrowUp';
            if (position != 0) {
                // scroll({
                //     top: sections[position - 1].offset,
                //     behavior: 'smooth'
                // });
                this.setState({
                    scrolling: true,
                    scrollingDirection: direction
                });
                let p = smoothScroll(sections[position - 1].offset)
                p.then(() => {
                    this.setState({
                        scrolling: false,
                        offset: sections[position - 1].offset
                    });
                    this.props.arrowKeyPress(this.state.scrollDirection);
                })
            }
            
            // this.props.arrowKeyPress(direction);
        }
    }

    render() {
        return (
            <div className="App">
                <DotNavigation />
                <KeepCaseContent />
                <About />
                <BuyKeepCase />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sections: state.section.sections,
        position: state.section.position
    };
};

export default connect(mapStateToProps, { addSections, arrowKeyPress })(App);

// function smoothScrollTest() {
//     var p = smoothScroll(document.querySelector("#greenDiv")).then(() => {
//       smoothScroll(document.querySelector("#redDiv")).then(() => {
//         alert("Scrolled down to the green div then back to the red. Cheers!");
//       });
//     });
//   }