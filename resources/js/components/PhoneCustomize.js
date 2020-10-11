import React from 'react';

import "./styles/PhoneCustomize.css";

const PhoneCustomize = React.forwardRef((props, ref) => {
    class PhoneCustomize extends React.Component {
    

        render() {
            return (
                <div className="customize" ref={ref}>
                    <div className="colors">
                        <label htmlFor="">Phone Color</label>
                        <div>
                            <span className="blue color"></span>
                            <span className="yellow color"></span>
                            <span className="red color"></span>
                        </div>
                    </div>
                    <div className="colors">
                        <label htmlFor="">Case Color</label>
                        <div>
                            <span className="green color"></span>
                            <span className="pink color"></span>
                            <span className="purple color"></span>
                        </div>
                    </div>
                    <div className="customize-buttons">
                        <button className="customize-button"><strong>UPLOAD PHOTO</strong></button>
                        <button className="customize-button"><strong>SHARE TO WIN</strong></button>
                    </div>
                </div>
            );
        }
    }

    return <PhoneCustomize />
});



export default PhoneCustomize;