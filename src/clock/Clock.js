import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            timeStarted: false,
            timeStoped: true,
            capture: []
        }
    }

    handleStartTime = (e) => {
        e.preventDefault();
        if (this.state.timeStoped) {
            this.timer = setInterval(() => {
                this.setState({ timeStarted: true, timeStoped: false });
                if (this.state.timeStarted) {
                    if (this.state.seconds >= 60) {
                        this.setState(prevState => ({
                            minutes: prevState.minutes + 1, seconds: 0
                         }));
                    }
                    if (this.state.minutes >= 60) {
                        this.setState(prevState => ({
                            hours: prevState.hours + 1, minutes: 0, seconds: 0
                        }));
                    }

                    this.setState(prevState => ({
                        seconds: prevState.seconds + 1
                     }));
                }
            }, 1000)
        }
    }

    handleTimerStop = e => {
        e.preventDefault();
 
        this.setState({ timeStarted: false, timeStoped: true });
        clearInterval(this.timer);
    }

    handleCapture = e => {
         this.setState(prevState => ({
             capture: [
                 ...prevState.capture, 
                 this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds]
         }))
    }

    handleReset = e => {
        this.setState({
            timeStarted: false,
            timeStoped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            capture: []
        }); 
        clearInterval(this.timer);
    }

    render() {
        return(
            <div className="card">
                <div className='card-header'>       
                    <h1>{this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}</h1>
                </div>
                <div className="card-body">
                    <button onClick={this.handleStartTime} className="btn btn-success">Start Timer</button>
                    <button onClick={this.handleTimerStop} className="btn btn-alert">Stop Timer</button>
                    <button onClick={this.handleCapture} className="btn btn-info">Capture Timer</button>
                    <button onClick={this.handleReset} className="btn btn-danger">Reset!</button>
                </div>
                <div className="card-footer text-muted">
                    {
                        this.state.capture.map((time, idx) => {
                        return <p key={idx}>Capture {idx} -> {time}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Clock;