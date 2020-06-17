import React, {Component} from 'react';

export class Counter extends Component {
    state = {
        counter: 0,
    };

    interval = null;
    componentDidMount() {
        console.log('Component Did Mount');
        this.interval = setInterval(() => {
            console.log('Get Data');
        }, 1000);
    }

    componentWillUnMount() {
        console.log('Component Will UnMount');
        clearInterval(this.interval);
    }

    handleButtonClick = (event) => {
        const action = +event.target.dataset.action;
        this.setState(
            {counter: this.state.counter + action
            })
    };

    render() {
        return (<div>
            <h1>Hello GEEKBRAINS</h1>
            <div>Counter: {this.state.counter}</div>
            <button data-action="1" onClick={this.handleButtonClick}>+1</button>
            <button data-action="-1" onClick={this.handleButtonClick}>-1</button>
        </div>);
    }

}