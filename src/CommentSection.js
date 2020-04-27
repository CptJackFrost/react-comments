import React from 'react';
import './App.scss';
import Post from './Post'
import CommentForm from './CommentForm';

class CommentSection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
            {
                date: Date.parse("2020-04-08 20:00:00"),
                user: "Lorem Ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie." 
            },
            {
                date: Date.parse("2020-04-09 20:00:00"),
                user: "Lorem Ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie." 
            }],
            formPosition: Infinity
        }
        this.setFormPosition = this.setFormPosition.bind(this)
    }

    setFormPosition(index) {
        this.setState(({formPosition}) => {
            return {
                formPosition: index
            }
        })
    }

    updateItems = (formData) => {
        const newItem = {
            date: Date.now(),
            user: formData.nameInput,
            text: formData.text 
        }
        const updatedItems = this.state.items
        updatedItems.splice(this.state.formPosition, 0, newItem)
        this.setState(state => {
            return {
                items: updatedItems,
                formPosition: Infinity
            }
        })
    }
    
    render(){
        const sectionArray = this.state.items.map(item => (
            <div key={this.state.items.indexOf(item)} className="post">
                <Post
                index={this.state.items.indexOf(item)}
                postDate={item.date} 
                user={item.user}  
                text={item.text}
                formBinder={this.setFormPosition}/>                        
            </div>                                  
        ))

        sectionArray.splice(this.state.formPosition, 0, <CommentForm key="form" visible="true" updateData={this.updateItems}/>)
        
        return(
            <div>                
                {sectionArray}
            </div>
        )
    }    
}

export default CommentSection;