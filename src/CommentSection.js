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
            }]
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
                
                {this.state.items.map(item => (
                    <div key={this.state.items.indexOf(item)} className="post">
                        <Post 
                        postDate={item.date} 
                        user={item.user}  
                        text={item.text}/>                        
                        <CommentForm updateData={this.updateItems}/>                        
                    </div>
                                          
                ))}

            <CommentForm visible="true" updateData={this.updateItems}/>
            </div>
        )
    }    
}

export default CommentSection;