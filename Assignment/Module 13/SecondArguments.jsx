// • What is the second argument that can optionally be passed tosetState and what is its purpose?

// The second argument that can optionally be passed to setState is a callback function. This callback function is called after the state has been updated and the component has been re-rendered.

// Example of setState

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log('State has been updated:', this.state.count);
            // Update the DOM or make an API call here
        });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}