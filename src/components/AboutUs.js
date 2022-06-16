import React, { Component } from 'react';

class AboutUs extends Component {

    reset = () => {
        this.props.history.push("/blogs");
    }
    
    goTo = () => {
        this.props.history.replace("/blogs");
    }

    render() {
        return (
            <div>
                <h1>AboutUs</h1>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.goTo}>Go To</button>
            </div>
        );
    }
}

export default AboutUs;