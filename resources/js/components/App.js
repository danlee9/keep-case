import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Image } from 'semantic-ui-react'
import "./App.css";

import About from './About';
import KeepCaseContent from './KeepCaseContent';
import BuyKeepCase from './BuyKeepCase';
import DontNavigation from './DotNavigation';
import DotNavigation from "./DotNavigation";

class App extends React.Component {
    

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



export default App;