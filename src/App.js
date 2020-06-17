import React, {Component} from 'react';

export class App extends Component {
    /*constructor(props){
        super(props);
        this.state = {
             counter: 10,
        };
        // this.handlePlusClick = this.handlePlusClick.bind(this);
    }*/
    state = {
        counter: 10,
    };
    handlePlusClick = (event) => {
        this.setState(
            {counter: this.state.counter + 1
        })
    };
    handleMinusClick = (event) => {
        this.setState(
            {counter: this.state.counter - 1
            })
    };
    handleButtonClick = (operation) => () => {
        this.setState(
            {counter: this.state.counter - operation
            })
    };
    handleButtonClick2 = (event) => {
        const action = +event.target.dataset.action;
        this.setState(
            {counter: this.state.counter + action
            })
    };

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentDidUpdate() {
        console.log('Component Did Update');
    }

    componentWillUnMount() {
        console.log('Component Will UnMount');
    }

    render() {
        return (<div>
            <h1>Hello GEEKBRAINS</h1>
            <div>Counter: {this.state.counter}</div>
            {/*<button onClick={() => {this.setState({counter: this.state.counter + 1})}}> +1 </button> */}
            {/*<button onClick={this.handlePlusClick.bind(this)}>+1</button> */}
            <button onClick={this.handlePlusClick}>+1</button>
            <button onClick={this.handleMinusClick}>-1</button>

            <h3>Cпособ 1</h3>
            <button onClick={this.handleButtonClick(-1)}>+1</button>
            <button onClick={this.handleButtonClick(1)}>-1</button>

            <h3>Cпособ 2</h3>
            <button data-action="1" onClick={this.handleButtonClick2}>+1</button>
            <button data-action="-1" onClick={this.handleButtonClick2}>-1</button>
        </div>);
    }
}