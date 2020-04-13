import React from 'react';
import './App.scss';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            nameInput: '',
            mailInput: '',
            text: '',
            visibility: "hidden"
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setVisible(){
        this.setState(({visibility}) => {
            return {
                visibility: "visible"
            }
        })
    }

    componentDidMount(){
        if (this.props.visible==="true"){
            this.setVisible()
        }
    }

    render(){
        return(            
            <div className={this.state.visibility}>
            <fieldset>
                <legend>
                    Добавить комментарий
                </legend>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Имя:</label>
                        <input type="text"
                               name="name"
                               id="name"
                               onChange={this.handleChangeName}
                               value={this.state.nameInput}></input>
                    </div>
                    <div>
                        <label htmlFor="mail">E-mail:</label>
                        <input type="email" 
                               name="mail" 
                               id="mail"
                               onChange={this.handleChangeMail}
                               value={this.state.mailInput}></input>
                    </div>
                    <div>
                        <label htmlFor="text">Текст комментария:</label>
                        <textarea cols="70" 
                                  rows="10"
                                  name="text"
                                  id="text"
                                  onChange={this.handleChangeText}
                                  value={this.state.text}></textarea>
                    </div>                    
                    <input className="submit" type="submit" value="Добавить комментарий"></input>
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

        this.setState(state => {
            return {
                nameInput: '',
                mailInput: '',
                text: ''     
            }
        })


        console.log("итемы: " + this.state.items);

        this.props.updateData(this.state)
    }
}

export default CommentForm;