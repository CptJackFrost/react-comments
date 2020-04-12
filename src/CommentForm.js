import React from 'react';
import './App.scss';
import Post from './Post';
import CommentSection from './CommentSection';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            nameInput: '',
            mailInput: '',
            text: ''          
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

            <CommentSection items={this.state.items}/>

            <fieldset>
                <legend>
                    Добавить комментарий
                </legend>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="name">Имя:</label>
                        <input type="text"
                               name="name"
                               id="name"
                               onChange={this.handleChangeName}
                               value={this.state.nameInput}></input>
                    </div>
                    <div>
                        <label for="mail">E-mail:</label>
                        <input type="email" 
                               name="mail" 
                               id="mail"
                               onChange={this.handleChangeMail}
                               value={this.state.mailInput}></input>
                    </div>
                    <div>
                        <label for="text">Текст комментария:</label>
                        <textarea cols="70" 
                                  rows="10"
                                  name="text"
                                  id="text"
                                  onChange={this.handleChangeText}
                                  value={this.state.text}></textarea>
                    </div>                    
                    <input class="submit" type="submit" value="Добавить комментарий"></input>
                </form>
            </fieldset>    

            </div>
        )
    }

    handleChangeName(e) {
        this.setState({
            nameInput: e.target.value
        })
    }

    handleChangeMail(e) {
        this.setState({
            mailInput: e.target.value
        })
    }

    handleChangeText(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!(this.state.text.length && 
            this.state.nameInput.length && 
            this.state.mailInput.length)){
                alert("Заполните все поля");
                return;
        }
        const newItem = {
            date: Date.now(),
            user: this.state.nameInput,
            text: this.state.text
        }

        this.setState(state => {
            return {
                items: state.items.concat(newItem),
                nameInput: '',
                mailInput: '',
                text: ''     
            }
        })
    }
}

export default CommentForm;