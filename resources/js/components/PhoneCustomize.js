import React from 'react';

import "./styles/PhoneCustomize.css";

const PhoneCustomize = React.forwardRef((props, ref) => {
    class PhoneCustomize extends React.Component {
    

        render() {
            return (
                <div className="customize" ref={ref}>
                    <div className="colors">
                        <label htmlFor="">Phone Color</label>
                        <div style={{marginTop: '7px'}}>
                            <span className="lightcoral color"></span>
                            <span className="mediumpurple color"></span>
                            <span className="white color"></span>
                        </div>
                    </div>
                    <div className="colors">
                        <label htmlFor="">Case Color</label>
                        <div style={{marginTop: '7px'}}>
                            <span className="black color"></span>
                            <span className="white color"></span>
                            <span className="lightpink color"></span>
                        </div>
                    </div>
                    <div className="customize-buttons">
                        <div style={{display: 'inline-block', marginRight: '10px'}}>
                            <input type="file" accept="image/*" name="image" id="file" onChange={props.upload}/>
                            <label htmlFor="file">UPLOAD PHOTO</label>
                        </div>
                        <button className="customize-button" style={{backgroundColor: 'navajowhite'}} onClick={props.save}><strong>SHARE TO WIN</strong></button>
                    </div>
                </div>
            );
        }
    }

    return <PhoneCustomize />
});



export default PhoneCustomize;