import React from 'react';
import './App.scss';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        }
    }

    getTime() {
        const time = (Date.now() - this.props.postDate)/1000;
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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.formBinder(this.props.index + 1, this.props.level);
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
        const wrapperClass = `wrapper level-${this.props.level}`;
        if (this.state.visible === true) {
            return(
                <div className={wrapperClass}>
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
                            <button className="reply" onClick={this.handleClick}>Ответить</button>
                        </div>                    
                        <p className="commText" dangerouslySetInnerHTML={{__html: this.props.text}}></p>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="wrapper">
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
