import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Mynavbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <Router>
        <Mynavbar />
            <Routes basename={process.env.PUBLIC_URL} >
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/projects" Component={Projects} />
                <Route exact path="/contact" Component={Contact} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;