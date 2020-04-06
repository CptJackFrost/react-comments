import React, {Component} from 'react';
import './App.scss';

class Post extends React.Component {
    render(){
        return(
            <div className="post">
                <div><img src="placeholder.jpg" alt="аватар" className="avatar"></img></div>
                <div className="post-content">
                    <div className="data">
                        <a href="#" className="user">Lorem Ipsum</a>
                        <span className="time">30 минут назад</span>
                        <div className="karma">
                            <button className="plus">+</button>
                            <div>10</div>
                            <button className="minus">-</button>
                        </div>
                        <div className="reply">Ответить</div>
                    </div>                    
                    <p className="commText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie.</p>
                </div>
            </div>
        )
    }
}

export default Post;