import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { Transition } from "semantic-ui-react";

class LinkModal extends React.Component {
    

    render() {
        return ReactDOM.createPortal(
            <Transition visible={true} animation='scale' duration={400}>
                <div class="ui basic modal">
                    <div class="ui icon header">
                        <i class="archive icon"></i>
                        Archive Old Messages
                    </div>
                    <div class="content">
                        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                    </div>
                    <div class="actions">
                        <div class="ui red basic cancel inverted button">
                            <i class="remove icon"></i>
                            No
                        </div>
                        <div class="ui green ok inverted button">
                            <i class="checkmark icon"></i>
                            Yes
                        </div>
                    </div>
                </div>
            </Transition>,
            document.querySelector('#link-modal')
        );
    }
}

export default LinkModal;