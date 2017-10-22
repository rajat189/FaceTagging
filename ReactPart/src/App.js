import React, { Component } from 'react';
import './App.css';
import ImageTag from './Components/ImageTag'
import $ from 'jquery'
class App extends Component {
    constructor(){
        super();
        this.state={
            allTags:[],
            tmpTags:[]
        }
    }
    getTags(){
        this.setState({allTags:[
            {
                id:1,
                title:"Dhoni",
                picX:120,
                picY:120
            },
            {
                id:2,
                title:"Virat",
                picX:220,
                picY:220
            },
            {
                id:3,
                title:"Rahul",
                picX:320,
                picY:320
            }
        ]});
    }
    getJsonTags(){
        $.ajax({
            url: 'http://127.0.0.1:8000/images/api/?format=json',
            dataType:'json',
            cache: false,
            success: function(data){
                this.setState({allTags: data}, function(){
                    console.log(this.state.allTags[0]);
                });
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    }
    postJsonTag(tag){
        var sentData={pic_id:5,name:tag['title'],pic_x:tag['pic_x'],pic_y:tag['pic_y']}
        $.ajax({
            url: 'http://127.0.0.1:8000/images/api/',
            dataType:'json',
            method:'POST',
            data:sentData,
            success: function(data){
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        });
    }
    componentWillMount(){
        //this.getTags();
        this.getJsonTags();
    }
    componentDidMount(){

    }
    handleSave(tag){
        console.log(tag);
        let tags = this.state.allTags;
        let tmp={
            id:4,
            pic_id:5,
            name:tag['title'],
            pic_x:tag['pic_x'],
            pic_y:tag['pic_y']
        }
        tags.push(tmp);
        this.setState({allTags:tags});
    }
    handleDelete(id){
        let tags=this.state.allTags;
        let index = tags.findIndex(x => x.id ===id );
        tags.splice(index,1);
        this.setState({allTags:tags});
    }
  render() {
    return (
      <div className="App">OK
          <ImageTag addTag={this.postJsonTag.bind(this)} onDelete={this.handleDelete.bind(this)} allTags={this.state.allTags}/>

      </div>
    );
  }
}

export default App;
