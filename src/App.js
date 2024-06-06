import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Mynavbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <BrowserRouter>
        <Mynavbar />
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/projects" Component={Projects} />
                <Route exact path="/contact" Component={Contact} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;