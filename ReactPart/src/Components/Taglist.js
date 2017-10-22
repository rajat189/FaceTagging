import React, { Component } from 'react';
class Taglist extends Component {
    deleteTag(id){
        console.log('remove');
        this.props.onDelete(id);
    }
    mouseOnLink(tag){
        console.log('over');
        this.props.onHover(tag);
    }
    mouseOutOfLink(){
        console.log('out');
        this.props.outHover();
    }
    render() {
        return (
            <li rel={this.props.tag.id}>
                <a onMouseOut={this.mouseOutOfLink.bind(this)}
                onMouseOver={this.mouseOnLink.bind(this,this.props.tag)}>
                    {this.props.tag.name}</a>
                <a onClick={this.deleteTag.bind(this,this.props.tag.id)} className="remove">Remove</a></li>
        );
    }
}

export default Taglist;
