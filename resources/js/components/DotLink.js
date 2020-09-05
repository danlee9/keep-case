import React from 'react';

const DotLink = props => {
    const scrollTo = e => {
        e.preventDefault();
        const offsetTop = document.querySelector(`#${props.to}`).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    return (
        <a href={`#${props.to}`} onClick={scrollTo}></a>
    );
};

export default DotLink;