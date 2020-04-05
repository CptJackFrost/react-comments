import React, {Component} from 'react';
import './App.scss';

class Comments extends React.Component {
    render(){
        return(
            <div className="CommBlock">
            <fieldset>
                <legend>
                    Добавить комментарий
                </legend>
                {/*}   <Post />  */}
                <form>
                    <label for="name">Имя:</label>
                    <input type="text" name="name" id="name"></input>
                    <label for="mail">E-mail:</label>
                    <input type="text" name="mail" id="mail"></input>
                    <label for="text">Текст комментария:</label>
                    <textarea name="text" id="text"></textarea>
                    <input type="submit" value="Добавить комментарий"></input>
                </form>
            </fieldset>    

            </div>
        )
    }
}

export default Comments;