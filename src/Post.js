import React, {Component} from 'react';
import './App.scss';

class Post extends React.Component {
    render(){
        return(
            <div>
                <img src="placeholder.jpg" alt="аватар"></img>
                <div>
                    <div>
                        <a href="#" className="user">Lorem Ipsum</a>
                        <span className="time">30 минут назад</span>
                        <div className="karma">
                            <button className="plus">+</button>
                            <div>10</div>
                            <button className="minus">-</button>
                        </div>
                        <button className="reply">Ответить</button>
                    </div>                    
                    <span className="commText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie.</span>
                </div>
            </div>
        )
    }
}

export default Post;