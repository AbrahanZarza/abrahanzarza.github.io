import React from 'react';
import Header from './structure/header/Header';
import About from './structure/about/About';
import Footer from './structure/footer/Footer';
import './App.scss';
import './App.responsive.scss';

export default () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Footer></Footer>
        </div>
    )
};