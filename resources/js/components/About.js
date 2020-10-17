import React from 'react';
import './styles/About.css';

const About = () => {
    return (
        <div className="main-section about" id="about" style={{paddingTop: '40px'}}>
            <div className="main-headline">About Keep Case</div>
            <iframe id="iframe" src="https://www.youtube.com/embed/lTRiuFIWV54" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="ipsum-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo quam delectus omnis, nostrum quod, esse dolore recusandae aspernatur sint nesciunt nobis laborum!</div>
            <div className="random-text">Random placeholder logos</div>
            <div className="logos">
                <img className="logo" src="https://uploads-ssl.webflow.com/5ed7ee2c9988695c7942917d/5ed7eecf11a0689b3f0ccf39_vowel-logo.svg" alt=""/>
                <img className="logo" src="https://uploads-ssl.webflow.com/5ed7ee2c9988695c7942917d/5ef35f7a1556f43f42574e50_tapdesk-logo.png" alt=""/>
                <img className="logo" src="https://uploads-ssl.webflow.com/5ed7ee2c9988695c7942917d/5ef35f8827001fdeed549319_meticoulus-logo.png" alt=""/>
            </div>
        </div>
    );
};

export default About;