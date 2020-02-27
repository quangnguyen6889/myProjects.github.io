import React, { Component } from 'react';
import './App.css';
import NoiDung from './NoiDung';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: "khoitao",
            trangthai2: "Do Quang Nguyen"
        }
    }

    componentWillMount() {
        console.log("componentWillMount da chay roi");
    }

    componentDidMount() {
        console.log("componentDidMount da chay");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate da chay");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate da chay");
    }

    render() {
        console.log("da render");
        console.log("hello Nguyen");
        console.log(this.state.trangthai);
        return (
            <div className="App">
                <NoiDung ten={this.state.trangthai2}></NoiDung>
                <button onClick={() => { this.capNhatState() }}>Click de cap nhat trang thai</button>
            </div>
        );
    }

    capNhatState = () => {
        this.setState(
            {
                trangthai: "trang thai da duoc update",
                trangthai2: "trang thai da duoc update lan 2"
            }
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate da chay");
    }

}

export default App;
