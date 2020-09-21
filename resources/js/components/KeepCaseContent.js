import React from 'react';
import Axios from 'axios';

import './KeepCaseContent.css';

class KeepCaseContent extends React.Component {
    state = {
        fullpath: null,
        glowing: false,
        imageCleared: false
    }

    componentDidMount() {
        console.log(this.props.custom);
        if (this.props.custom) {
            Axios.get(`/api/image/${this.props.custom}`).then(res => {
                const data = res.data;
                this.setState({
                    fullpath: `/storage/${data.path}.${data.extension}`
                });
            })
        }
    }

    onChange = (event) => {
        console.log(event);
        var image = document.getElementById('output');
        console.log('hello');
        image.src = URL.createObjectURL(event.target.files[0]);
        this.setState({
            glowing: true,
            imageCleared: false
        });
    }

    undo = () => {
        var image = document.getElementById('output');
        image.src = null;
        this.setState({
            glowing: false,
            imageCleared: true
        });
    }

    onSubmit = async e => {
        let image = document.getElementById('file').files[0];
        console.log(image);
        let formData = new FormData();
        formData.append("image", image);
        Axios.post('/api/image', formData).then(res => {
            console.log(res);
            alert(window.location.host + '/' + res.data.path);
        });
    }   

    render() {
        return (
            <div className="ui centered grid main-section keep-case-content" style={{margin: 0}} id="content">
                <div className="twelve wide column">
                    <div className="ui mobile reversed stackable centered grid">
                        <div className="six wide computer sixteen wide mobile column" style={{textAlign: 'center', position: 'relative', boxSizing: 'border-box'}}>
                            <img className="ui middle aligned big image" src="/img/iphone11transparent.png" id="iphone"></img>
                            {/* <img className="ui middle aligned big image" src="https://www.pngitem.com/pimgs/m/145-1453218_iphone-11-pro-max-hd-png-download.png"></img> */}
                            {/* <div style={{position: 'absolute', width: '198px', left: '122px', top: '26px', height: '386px', border: '1px solid black', borderRadius: '30px', boxShadow: '0 0 10px black'}}></div> */}
                            {/* <div style={{position: 'absolute', width: '44.3%', left: '28%', top: '6%', height: '87%', border: '1px solid black', borderRadius: '30px', boxShadow: '0 0 10px black'}}></div> */}
                            {/* <div style={{position: 'absolute', width: '100%', fontSize: '24px', top: '35%'}} className="">
                                <img src={this.state.fullpath} alt="" id="output" width="125" height="125" style={{borderColor: '#9ecaed', borderSize: '2px', boxShadow: '0 0 10px green', borderRadius: '100%'}}/>
                                <div style={{display: 'inline-block', width: '125px', height: '125px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}></div>
                            </div> */}
                            
                            {/* <div style={{position: 'absolute', width: '100%', fontSize: '24px', top: '35%'}} className="">
                                <img src={this.state.fullpath} alt="" id="output" width="125" height="125" style={{borderColor: '#9ecaed', borderSize: '2px', boxShadow: '0 0 10px green', borderRadius: '100%'}}/>
                                <div style={{position: 'absolute', width: '125px', height: '125px', bottom: '2px', left: '159px', borderSize: '2px', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '100%', boxShadow: 'inset 0 0 10px #fff, inset 4px 0 16px #f0f, inset -4px 0 16px #0ff, inset 4px 0 60px #f0f, inset -4px 0 60px #0ff'}}></div>
                            </div> */}

                            {/* <div className="upload-container">
                                <img src={this.state.fullpath} alt="" id="output" width="125" height="125" style={{borderColor: '#9ecaed', borderSize: '2px', boxShadow: '0 0 10px green', borderRadius: '100%', position: 'absolute', bottom: '2px', left: '50%', marginLeft: '-62.5px'}}/>
                                <div style={{position: 'absolute', width: '125px', height: '125px', bottom: '2px', left: '50%', marginLeft: '-62.5px', borderSize: '2px', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '100%', boxShadow: 'inset 0 0 10px #fff, inset 4px 0 16px #f0f, inset -4px 0 16px #0ff, inset 4px 0 60px #f0f, inset -4px 0 60px #0ff'}}></div>
                            </div> */}
                            <div className="upload-container">
                                <img src={this.state.fullpath} alt="" id="output" className={`upload-container-content image-content ${this.state.imageCleared ? 'hide-image-error' : ''}`}/>
                                <div className={`upload-container-content initial-box-shadow ${this.state.glowing ? 'inset-box-shadow' : ''}`} style={{borderSize: '2px'}}></div>
                            </div>
                        </div>
                        <div className="nine wide computer sixteen wide mobile middle aligned column" style={{boxSizing: 'border-box'}}>
                            <div className="title" style={{lineHeight: '100%'}}>
                                Keep
                            </div>
                            <div className="title" style={{lineHeight: '100%'}}>
                                Case
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <input type="file" accept="image/*" name="image" id="file" onChange={this.onChange}/>
                                <label htmlFor="file">Choose An Image</label>
                            </div>
                            <div>
                                {/* <button onClick={this.onSubmit}>Submit</button> */}
                                <div className="ui buttons">
                                    <button className="ui button" onClick={this.undo}>Undo</button>
                                    <div className="or"></div>
                                    <button className="ui blue button" onClick={this.onSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//onChange="loadFile(event)"

export default KeepCaseContent;