import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Image } from 'semantic-ui-react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "./App.css";

SwiperCore.use([Mousewheel, EffectFade, Navigation, Pagination]);

import { addSections, arrowKeyPress } from '../actions';

import About from './About';
import KeepCaseContent from './KeepCaseContent';
import BuyKeepCase from './BuyKeepCase';
import DotNavigation from "./DotNavigation";

function smoothScroll(offset, direction) {
    console.log('offset')
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
    
    return new Promise((resolve, reject) => {
        const failed = setTimeout(() => {
            console.log('rejected');
            reject();
        }, 2000);
  
        const scrollHandler = () => {
            console.log(offset);
            console.log(window.pageYOffset);
            if (direction === 'ArrowDown') {
                if (window.pageYOffset >= offset) {
                    window.removeEventListener("scroll", scrollHandler);
                    clearTimeout(failed);
                    console.log('resolved while scrolling down')
                    resolve();
                }
            } else {
                if (window.pageYOffset <= offset) {
                    window.removeEventListener("scroll", scrollHandler);
                    clearTimeout(failed);
                    console.log('resolved while scrolling up')
                    resolve();
                }
            }
            
        };

        if (Math.round(window.pageYOffset) === offset) {
            clearTimeout(failed);
            console.log('resolved without adding event listener')
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

    // componentWillMount() {
    //     window.addEventListener('keydown', this.arrowKeyPress);
    //     window.addEventListener('wheel', this.wheelScroll, {passive: false});
    //     window.addEventListener('touchmove', this.touchMoveHandler);
    //     // window.addEventListener('scroll', this.mouseScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('keydown', this.arrowKeyPress);
    //     window.removeEventListener('wheel', this.wheelScroll);
    //     window.removeEventListener('touchmove', this.touchMoveHandler);
    //     // window.removeEventListener('scroll', this.mouseScroll);
    // }

    scrollSection = direction => {
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

    wheelScroll = e => {
        console.log('wheel');
        e.preventDefault();
        console.log(e.deltaY);
        const { sections, position } = this.props;
        var direction;
        // e.deltaY > 0 ? direction = 'ArrowDown' : direction = 'ArrowUp';
        if (e.deltaY > 0) {
            direction = 'ArrowDown';
        } else if (e.deltaY < 0) {
            direction = 'ArrowUp';
        }
        this.scrollSection(direction);
    }

    arrowKeyPress = e => {
        if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
            e.preventDefault();
            const direction = e.key;
            this.scrollSection(direction);
        }
    }

    touchMoveHandler = e => {
        console.log(e);
    }

    // mouseScroll = e => {
    //     // console.log(e);
    //     // e.preventDefault();
    //     if (this.state.scrolling) {
    //         console.log('state scrolling');
    //         return;
    //     }
    //     const { sections, position } = this.props;        
        
    //     let newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (newScrollTop > this.state.offset) {
    //         console.log('scrolldown')
    //         let direction = 'ArrowDown';
    //         if (position != sections.length - 1) {
    //             this.setState({
    //                 scrolling: true,
    //                 scrollDirection: direction
    //             });
    //             let p = smoothScroll(sections[position + 1].offset, direction)
    //             p.then(() => {
    //                 this.setState({
    //                     scrolling: false,
    //                     offset: sections[position + 1].offset
    //                 });
    //                 this.props.arrowKeyPress(this.state.scrollDirection);
    //             })
    //         }
            
    //         // this.props.arrowKeyPress(direction);
    //     } else {
    //         console.log('scrollup');
    //         let direction = 'ArrowUp';
    //         if (position != 0) {
    //             this.setState({
    //                 scrolling: true,
    //                 scrollingDirection: direction
    //             });
    //             let p = smoothScroll(sections[position - 1].offset, direction)
    //             p.then(() => {
    //                 this.setState({
    //                     scrolling: false,
    //                     offset: sections[position - 1].offset
    //                 });
    //                 this.props.arrowKeyPress(this.state.scrollDirection);
    //             })
    //         }
            
    //         // this.props.arrowKeyPress(direction);
    //     }
    // }

    render() {
        return (
            <div className="App">
                {/* <DotNavigation />
                <KeepCaseContent />
                <About />
                <BuyKeepCase /> */}
                <Swiper
                    direction={'vertical'}
                    mousewheel={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect={'slide'}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <KeepCaseContent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <About />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BuyKeepCase />
                    </SwiperSlide>
                    {/* <SwiperSlide><div style={{height: '100vh', backgroundColor: 'red'}}>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div style={{height: '100vh', backgroundColor: 'yellow'}}>Slide 2</div></SwiperSlide>
                    <SwiperSlide><div style={{height: '100vh', backgroundColor: 'green'}}>Slide 3</div></SwiperSlide>
                    <SwiperSlide><div style={{height: '100vh', backgroundColor: 'blue'}}>Slide 4</div></SwiperSlide> */}
                </Swiper>
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