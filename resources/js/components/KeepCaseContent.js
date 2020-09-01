import React from 'react';

class KeepCaseContent extends React.Component {
    onChange = (event) => {
        console.log(event);
        var image = document.getElementById('output');
	    image.src = URL.createObjectURL(event.target.files[0]);
    }

    render() {
        return (
            <div className="ui centered grid main-section" style={{margin: 0}}>
                <div className="twelve wide column">
                    <div className="ui mobile reversed stackable centered grid">
                        <div className="seven wide computer sixteen wide mobile column" style={{textAlign: 'center', position: 'relative', padding: '0'}}>
                            <img className="ui middle aligned big image" src="/img/iphone11transparent.png"></img>
                            <div style={{position: 'absolute', width: '100%', fontSize: '24px', top: '40%'}} className="">
                                <img src="" alt="" id="output" width="200"/>
                            </div>
                        </div>
                        <div className="nine wide computer sixteen wide mobile middle aligned column">
                            <div className="title" style={{lineHeight: '100%'}}>
                                Keep
                            </div>
                            <div className="title" style={{lineHeight: '100%'}}>
                                Case
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <input type="file" accept="image/*" name="image" id="file" onChange={this.onChange}/>
                                <label htmlFor="file">choose a file</label>
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