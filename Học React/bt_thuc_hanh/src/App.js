import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';


class App extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <Header />
                <Content tieude="Tiêu đề 1" vitri="order-lg-2" anh="img/01.jpg" />
                <Content tieude="Tiêu đề 2" anh="img/02.jpg" />
                <Content tieude="Tiêu đề 3" vitri="order-lg-2" anh="img/03.jpg" />
                <Footer />
                <Footer />
            </div>
        );
    }
}

export default App;