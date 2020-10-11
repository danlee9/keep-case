import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { Transition, Popup } from "semantic-ui-react";

import './styles/LinkModal.css';

import { closeLinkModal } from "../actions";

class LinkModal extends React.Component {
    state = {
        popup: false
    }

    closeLinkModal = () => {
        this.props.closeLinkModal();
    }

    copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = window.location.host + '/' + this.props.imagePath;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.setState({
            popup: true
        });
    };

    popupClose = () => {
        this.setState({
            popup: false
        });
    }

    render() {
        const copyButton =  (<div className="ui green ok inverted button" onClick={this.copyToClipboard}>
                                <i className="checkmark icon"></i>
                                Copy to Clipboard
                            </div>)
        return ReactDOM.createPortal(
            <>
                <Transition visible={this.props.linkModal && !this.props.imagePath} animation='fade' duration={500}>
                    <div className="ui active dimmer" style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                        <div className={`ui active massive text loader ${this.props.imagePath ? 'hide' : ''}`} style={{color: 'dodgerblue'}}>
                            <strong>Saving...</strong>
                        </div>
                    </div>
                </Transition>
                <Transition visible={this.props.linkModal && this.props.imagePath} animation='fade' duration={200}>                
                    <div class="ui active" style={{position: 'fixed', height: '100vh', width: '100%', top: 0, zIndex: '999', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.9)', color: 'white'}}>
                        <div className="ui icon header" style={{color: 'white', paddingTop: '10%'}}>
                            <i className="share square icon"></i>
                            {window.location.host + '/' + this.props.imagePath}
                        </div>
                        <div className="content">
                            <p>Share your custom link!</p>
                        </div>
                        <div className="actions" style={{marginTop: '20px'}}>
                            <div className="ui red basic cancel inverted button" onClick={this.closeLinkModal}>
                                <i className="remove icon"></i>
                                Close
                            </div>
                            <Popup
                                trigger={copyButton}
                                content={"Copied to clipboard!"}
                                on='click'
                                open={this.state.popup}
                                onClose={this.popupClose}
                                position='right center'
                            />
                            {/* <div className="ui green ok inverted button" onClick={this.copyToClipboard}>
                                <i className="checkmark icon"></i>
                                Copy to Clipboard
                            </div> */}
                        </div>
                        {/* <Transition visible={false} animation='fade' duration={200}>
                            <div className="ui active massive text loader" style={{color: 'dodgerblue'}}>
                                <strong>Saving...</strong>
                            </div>
                        </Transition>
                        <Transition visible={true} animation='fade' duration={200}>
                            <div className="ui icon header" style={{color: 'white', paddingTop: '10%'}}>
                                <i className="share square icon"></i>
                                asdfasdf
                            </div>
                            <div className="content">
                                <p>Share your custom link by copying clipboard. Or copy the link from address bar</p>
                            </div>
                            <div className="actions" style={{marginTop: '10px'}}>
                                <div className="ui red basic cancel inverted button" onClick={this.closeLinkModal}>
                                    <i className="remove icon"></i>
                                    Close
                                </div>
                                <div className="ui green ok inverted button">
                                    <i className="checkmark icon"></i>
                                    Copy to Clipboard
                                </div>
                            </div>
                        </Transition> */}
                        {/* <div class="ui icon header" style={{color: 'white', paddingTop: '10%'}}>
                            <i class="share square icon"></i>
                            asdfasdfasdfasdf.com/qwerty
                        </div>
                        <div class="content">
                            <p>Share your custom link by copying clipboard. Or copy the link from address bar</p>
                        </div>
                        <div class="actions" style={{marginTop: '10px'}}>
                            <div class="ui red basic cancel inverted button" onClick={this.closeLinkModal}>
                                <i class="remove icon"></i>
                                Close
                            </div>
                            <div class="ui green ok inverted button">
                                <i class="checkmark icon"></i>
                                Copy to Clipboard
                            </div>
                        </div> */}
                    </div>                
                </Transition>
            </>,
            document.querySelector('#link-modal')
        );
    }
}

const mapStateToProps = state => {
    return { 
        linkModal: state.image.linkModal,
        imagePath: state.image.imagePath
    };
};

export default connect(mapStateToProps, { closeLinkModal })(LinkModal);

// <div style={{position: 'fixed', height: '100vh', width: '100%', backgroundColor: 'dodgerblue', opacity: 0.2, top: 0, zIndex: '999'}}>HELLO</div>

//style={{position: 'fixed', height: '100vh', width: '100%', opacity: 0.8, top: 0, zIndex: '999', textAlign: 'center', backgroundColor: 'black', color: 'white'}}