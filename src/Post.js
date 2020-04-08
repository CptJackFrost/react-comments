import React, {Component} from 'react';
import './App.scss';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: -0,
            visible: true
        }
    }

    changeKarma(i) {       
        const points = this.state.count + i;
        //let visibility = this.state.visible;
        if (points <= -10) {
            this.setVisible(false);
        } else {
            this.setVisible(true);
        }
        this.setState((state)=>{
            return {
                count: points,
                //visible: visibility
            }
        })
    }
    
    setVisible(switcher) {
        this.setState(({visible}) => {
            return {
                visible: switcher
            }
        })
    }
    
    render() {
        const count = this.state.count;
        if (this.state.visible === true) {
            return(
                <div className="post">
                    <div><img src="placeholder.jpg" alt="аватар" className="avatar"></img></div>
                    <div className="post-content">
                        <div className="data">
                            <a href="#" className="user">Lorem Ipsum</a>
                            <span className="date">30 минут назад</span>
                            <div className="karma">
                                <button className="plus" onClick={() => this.changeKarma(1)}>+</button>
                                <div>{count}</div>
                                <button className="minus" onClick={() => this.changeKarma(-1)}>-</button>
                            </div>
                            <div className="reply">Ответить</div>
                        </div>                    
                        <p className="commText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nulla a quam commodo, id scelerisque tellus molestie.</p>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="post">
                    <div><img src="placeholder.jpg" alt="аватар" className="avatar"></img></div>
                    <div className="post-content">
                        <div className="data">
                            <a href="#" className="user">Lorem Ipsum</a>
                            <span className="date">30 минут назад</span>
                            <div className="karma">
                                <button className="plus" onClick={() => this.changeKarma(1)}>+</button>
                                <div>{count}</div>
                                <button className="minus" onClick={() => this.changeKarma(-1)}>-</button>
                            </div>
                            <div className="reply">Ответить</div>
                        </div>                    
                        <p className="commText">
                            <button onClick={() => this.setVisible(true)}>Развернуть комментарий</button>
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default Post;