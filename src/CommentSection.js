import React from 'react';
import './App.scss';
import Post from './Post'

export default class CommentSection extends React.Component {
    
    render(){
        
        return(
            <div>
                {this.props.items.map(item => (
                    <Post 
                    postDate={item.date} 
                    user={item.user}  
                    text={item.text}/>
                ))}
            </div>
        )
    }
}