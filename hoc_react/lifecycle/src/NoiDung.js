import React, { Component } from 'react';

class NoiDung extends Component {

    componentWillReceiveProps(nextProps) {
        console.log("chay componentWillReceiveProps cua NoiDung " + nextProps.ten);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("chay shouldComponentUpdate cua NoiDung");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("chay componentWillUpdate cua NoiDung");
    }

    render() {
        return (
            <div>
                <h1>{this.props.ten}</h1>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("chay componentDidUpdate cua NoiDung");
    }
   
}

export default NoiDung;