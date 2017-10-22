import React, { Component } from 'react';
import Taglist from './Taglist'
import Tagit from './Tagit'
class ImageTag extends Component {

    constructor(){
        super();
        this.state={
            showTagBox:false,
            isHover:false,
            moX:0,
            moY:0,
            tagName:""
        }
    }
    ImageCliCked(e){
        this.setState({
            showTagBox:true
        });
        var mouseX = e.pageX - 8;
        var mouseY = e.pageY - 8;
        this.refs.calli.onLoadBox(mouseX,mouseY)
        //console.log(this.state);
    }
    deleteTag(id){
        this.props.onDelete(id);
    }
    saveClicked(Tg){
        this.props.addTag(Tg);
    }
    hoverTag(tag){
        console.log(tag);
        this.setState({
            isHover:true,
            moX:tag.pic_x,
            moY:tag.pic_y,
            tagName:tag.title
        });
    }
    hoverOutTag(){
        this.setState({
            isHover:false,
            moX:0,
            moY:0,
            tagName:""
        });
    }
    render() {
        var tagViewStyle={
            left:'250px',
            top:'300px',
            display:'none'
        };
        let tagItems;
        if(this.props.allTags){
            tagItems = this.props.allTags.map(tag => {
                //console.log(tag);
                return(
                    <Taglist outHover={this.hoverOutTag.bind(this)} onHover={this.hoverTag.bind(this)} onDelete={this.deleteTag.bind(this)} key={tag.id} tag={tag} />
                );
            });
        }
        if(this.state.isHover){
            tagViewStyle={
                left:this.state.moX,
                top:this.state.moY,
                display:'block'
            }
        }
        return (
            <div>
                <div id="imgtag">
                    <img src="image1.jpg"  onClick={this.ImageCliCked.bind(this)} alt="flt" width="500" height="400"/>
                    <h1>Image1</h1>
                    <div id="tagbox">
                        <div className="tagview" style={tagViewStyle} id="view_1">
                            <label>{this.state.tagName}</label>
                        </div>
                    </div>
                </div>

                <div id="taglist">
                    <span className="tagtitle">List of Tags</span>
                    <ol>
                        {tagItems}
                    </ol>
                </div>

                <Tagit addTag={this.saveClicked.bind(this)} showBoxVis={this.state.showTagBox} ref="calli"/>
            </div>

        );
    }
}

export default ImageTag;
