import React from 'react';
import './App.scss';
import Post from './Post'
import CommentForm from './CommentForm';

export default class CommentSection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    updateItems = (formData) => {
        const newItem = {
            date: Date.now(),
            user: formData.nameInput,
            text: formData.text 
        }
        this.setState(state => {
            return {
                items: state.items.concat(newItem)
            }
        })
    }
    
    render(){
        
        return(
            <div>
                <Post 
                postDate={Date.parse("2020-04-08 20:00:00")}
                user="Lorem Ipsum"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie." 
            />
            
            <Post 
                postDate={Date.parse("2020-04-09 20:00:00")}
                user="Lorem Ipsum"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie." 
            />

                {this.state.items.map(item => (
                    <Post 
                    postDate={item.date} 
                    user={item.user}  
                    text={item.text}/>
                ))}

            <CommentForm updateData={this.updateItems}/>
            </div>
        )
    }

    
}