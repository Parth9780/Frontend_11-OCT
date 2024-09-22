// What is Pure Component? When to use Pure Component over Component? 

// A Pure Component is a type of React component that is optimized for performance by only re-rendering when its props or state change. This is achieved by implementing the shouldComponentUpdate() method, which returns a boolean indicating whether the component should re-render.

// Example React Components

import React, { PureComponent } from 'react';
class Counter extends PureComponent {
    render() {
        return (
            <div>
                <p>Count: {this.props.count}</p>
                <button onClick={() => this.props.onIncrement()}>+</button>
            </div>
        );
    }
}