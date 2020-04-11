import React from 'react';
import './App.scss';
import Post from './Post';
import CommentSection from './CommentSection';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: Date.now(),
            items: [],
            nameInput: '',
            mailInput: '',
            text: ''          
        }
        this.props = {
            
        }
    }

    render(){
        return(
            
            <div className="CommBlock">
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

            <fieldset>
                <legend>
                    Добавить комментарий
                </legend>
                <form>
                    <div>
                        <label for="name">Имя:</label>
                        <input type="text" name="name" id="name"></input>
                    </div>
                    <div>
                        <label for="mail">E-mail:</label>
                        <input type="email" name="mail" id="mail"></input>
                    </div>
                    <div>
                        <label for="text">Текст комментария:</label>
                        <textarea cols="70" rows="10" name="text" id="text"></textarea>
                    </div>                    
                    <input class="submit" type="submit" value="Добавить комментарий"></input>
                </form>
            </fieldset>    

            </div>
        )
    }
}

export default CommentForm;