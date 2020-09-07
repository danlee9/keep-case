import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Image } from 'semantic-ui-react'
import "./App.css";

import { addSections } from '../actions';

import About from './About';
import KeepCaseContent from './KeepCaseContent';
import BuyKeepCase from './BuyKeepCase';
import DotNavigation from "./DotNavigation";

class App extends React.Component {
    componentDidMount() {
        this.props.addSections();
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
        sections: state.section.sections
    };
};

export default connect(mapStateToProps, { addSections })(App);