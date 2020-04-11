import React from 'react';
import './App.scss';
import Post from './Post'

class CommentSection extends React.Component {
    
    render(){
        
        return(
            <div>
                {this.props.items.map(item => (
                    <Post 
                    postDate={item.date} 
                    user={item.nameInput}  
                    mail={item.mailInput}
                    text={item.text}/>
                ))}
            </div>
        )
    }
}