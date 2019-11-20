import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100
        }
    }

    componentDidMount () {
        this.countChange();
    }

    componentWillUnmount() {
        clearInterval(this.doIntervalChange)
    }

    countChange = () => {
        this.doIntervalChange = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000);
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Current Count: {count}</h1>
            </div>
        )
    }
}

export default Timer;