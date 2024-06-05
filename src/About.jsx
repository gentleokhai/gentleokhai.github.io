import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import genie from './DSC_8234.JPG';

function About() {
    return (
        <div>
            {/* About Section */}
            <section id="about" className="py-5">
                <Container>
                    <Row>
                        <Col md={6} className="mb-3">
                            <h2 className='me'>About Me</h2>
                        </Col>
                        <Col md={6}>
                            <img src= {genie} alt="Gentle Okhai" className='img-fluid' />
                        </Col>
                        <div className="txt">
                            <p>Hello, good day.</p>
                            <p>My name is Gentle Okhai, a software engineer temporarily based in Benin City Nigeria.</p>
                            <p>I currently specialize in web and desktop application development.</p>
                            <p>I am passionate about programming in general and have a strong background in working with servers.</p>
                            <b>Technologies I currently use include:</b>
                            <ol>Python</ol>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
export default About;