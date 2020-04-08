import React, {Component} from 'react';
import './App.scss';

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="CommBlock">
            <fieldset>
                <legend>
                    Добавить комментарий
                </legend>
                {/*}   <Post />  */}
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

export default Comments;