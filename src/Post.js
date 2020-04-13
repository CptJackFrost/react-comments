import React from 'react';
import './App.scss';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: (Date.parse(new Date()) - props.postDate)/1000
        }
    }

    getTime() {
        const time = this.state.seconds;
        let date;
        if (time < 3600){
            date = `${Math.round(time / 60)} минут назад`;
        } else if (time < 3600 * 24) {
            date = `${Math.round(time / 3600)} часов назад`;
        } else {
            date = `${Math.round(time / (3600 * 24))} дней назад`;
        }

        return date;
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1,
            dateString: this.getTime()
        }));
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    render(){
        return(
            <span className="date">{this.state.dateString}</span>
        )
    }
}

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            visible: true
        }
    }

    changeKarma(i) {       
        const points = this.state.count + i;
        if (points < -10) {
            this.setVisible(false);
        } else {
            this.setVisible(true);
        }
        this.setState((state)=>{
            return {
                count: points,
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
                            <div className="user">{this.props.user}</div>
                            <Timer postDate={this.props.postDate}/>
                            <div className="karma">
                                <button className="plus" onClick={() => this.changeKarma(1)}>+</button>
                                <div>{count}</div>
                                <button className="minus" onClick={() => this.changeKarma(-1)}>-</button>
                            </div>
                            <div className="reply">Ответить</div>
                        </div>                    
            <p className="commText">{this.props.text}</p>
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
                            <div className="user">{this.props.user}</div>
                            <Timer postDate={this.props.postDate}/>
                            <div className="karma">
                                <button className="plus" onClick={() => this.changeKarma(1)}>+</button>
                                <div>{count}</div>
                                <button className="minus" onClick={() => this.changeKarma(-1)}>-</button>
                            </div>
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