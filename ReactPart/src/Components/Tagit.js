import React, { Component } from 'react';
class Tagit extends Component {
    constructor(){
        super();
        this.state={
            showBox:false,
            mouX:0,
            mouY:0,
        }
    }
    saveClicked(Tg) {
        console.log(this.refs.tagtext.value);
        Tg={
            pic_x: this.state.mouX,
            pic_y: this.state.mouY,
            title: this.refs.tagtext.value
        }
        this.props.addTag(Tg);
        this.setState({
            showBox:false,
            mouY:0,
            mouX:0
        });
    }
    cancelClicked(){
        console.log("hi");
        this.setState({
            showBox:false,
            mouY:0,
            mouX:0
        });
    }
    onLoadBox(mx,my){
        console.log(mx);
        this.setState({
            showBox:true,
            mouX:mx,
            mouY:my
        });
    }
    render() {
        var boxViewStyle={
            display:'none'
        };
        if(this.state.showBox){
            boxViewStyle={
                display:'block',
                top:this.state.mouY,
                left:this.state.mouX
            };
        }
        return (
            <div id='tagit' style={boxViewStyle}>
                <div className='box'></div>
                <div className='name'>
                    <div className='text'>Type any name or tag</div>
                    <input type='text' ref="tagtext" name='txtname' id='tagname' />
                    <input type='button' name='btnsave' onClick={this.saveClicked.bind(this,this.state.tag)} value='Save' id='btnsave' />
                    <input type='button' name='btncancel' onClick={this.cancelClicked.bind(this)} value='Cancel' id='btncancel' />
                </div>
            </div>
        );
    }
}

export default Tagit;
