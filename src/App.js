import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Work from './components/work/Work';

export default () => {
    return (
        <div className="container">
            <Header/>
            <main>
                <About/>
                <Work/>
                <Contact/>
                <Footer/>
            </main>
        </div>
    )
};