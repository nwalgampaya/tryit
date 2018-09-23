import React, { Component } from 'react';
import Morning from './Morning';

class Greetings extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* Good Morning 11! {this.props.greetings} */}
                <Morning greetx={this.props.greet} />
            </div>
        );
    }
}

export default Greetings;