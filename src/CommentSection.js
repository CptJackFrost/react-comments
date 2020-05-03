import React from 'react';
import './App.scss';
import Post from './Post'
import CommentForm from './CommentForm';
import {Remarkable} from 'remarkable'
class CommentSection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
            {
                level: 0,
                date: Date.parse("2020-04-08 20:00:00"),
                user: "Lorem Ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie." 
            },
            {
                level: 0,
                date: Date.parse("2020-04-09 20:00:00"),
                user: "Lorem Ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie." 
            }],
            formPosition: Infinity,
            depth: 0
        }
        this.setForm = this.setForm.bind(this)
    }

    setForm(index, level) {
        let depthLevel
        if (level === 3){
            depthLevel = 3
        } else {
            depthLevel = level + 1
        }
        this.setState(({depth})=>{
            return {
                depth: depthLevel
            }
        })

        this.setState(({formPosition}) => {
            return {
                formPosition: index
            }
        })
    }

    updateItems = (formData) => {
        const newItem = {
            date: formData.date,
            user: formData.nameInput,
            text: new Remarkable().render(formData.text),
            level: formData.level
        }
        const updatedItems = this.state.items
        updatedItems.splice(this.state.formPosition, 0, newItem)
        this.setState(state => {
            return {
                items: updatedItems,
                formPosition: Infinity
            }
        })

        console.log("итемы: ")
        this.state.items.forEach(element => {
            console.log(element)
        });
    }
    
    render(){
        const sectionArray = this.state.items.map(item => (
            <div key={this.state.items.indexOf(item)} className="post">
                <Post
                level={item.level}
                key={this.state.items.indexOf(item)} 
                index={this.state.items.indexOf(item)}
                postDate={item.date} 
                user={item.user}  
                text={item.text}
                formBinder={this.setForm}/>                        
            </div>                                  
        ))

        sectionArray.splice(this.state.formPosition, 0, <CommentForm key="form" level={this.state.depth} updateData={this.updateItems}/>)
        
        return(
            <div className="commSection">                
                {sectionArray}
            </div>
        )
    }    
}

export default CommentSection;
