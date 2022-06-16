import React, { Component } from 'react';
import queryString from 'query-string';

class Blogs extends Component {
    getQueryString = () => {
        const query = queryString.parse(this.props.location.search);
        console.log(query);
    }

    render() {
        return (
            <div>
                <h1>Blogs {this.props.name}</h1>
                <p>Author is {this.props.match.params.author}</p>
                <button onClick={this.getQueryString}>Get Query</button>
            </div>
        );
    }
}

export default Blogs;