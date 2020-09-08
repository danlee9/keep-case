import React from 'react';
import { connect } from "react-redux";

import { clickNaviDot } from "../actions";

// const DotLink = props => {
//     const scrollTo = e => {
//         e.preventDefault();
//         const offsetTop = document.querySelector(`#${props.to}`).offsetTop;
//         scroll({
//             top: offsetTop,
//             behavior: "smooth"
//         });
//     }
//     return (
//         <a href={`#${props.to}`} onClick={scrollTo}></a>
//     );
// };

class DotLink extends React.Component {
    scrollTo = e => {
        e.preventDefault();
        const positionTo = this.props.sectionPositionMap[this.props.to];
        const offsetTop = this.props.sections[positionTo].offset;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
        this.props.clickNaviDot(positionTo, this.props.sections[positionTo].name);
    }

    render() {
        return (
            <a href={`#${this.props.to}`} className={this.props.currentSection === this.props.to ? 'active' : ''} onClick={this.scrollTo}></a>
        );
    }
}

const mapStateToProps = state => {
    return { 
        sections: state.section.sections,
        sectionPositionMap: state.section.sectionPositionMap,
        position: state.section.position,
        currentSection: state.section.currentSection
    };
};

export default connect(mapStateToProps, { clickNaviDot })(DotLink);