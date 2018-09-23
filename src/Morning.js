import React, { Component } from 'react';

class Morning extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1> Hi Good </h1>
                {this.props.greetx}
            </div>
        );
    }
}

export default Morning;