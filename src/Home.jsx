import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import genie from './DSC_8234.JPG';
import logSig from './log-sig.jpg';
import calc from './calc.png';
const  Home = () => {
    return (
        <div>
            <header className="bg-primary text-white text-center py-5">
                <Container>
                    <h1 className="display-4">Hello <div className="wave">&#x270B;</div> and Welcome to My Portfolio</h1>
                    <p className="lead">Showcasing some of my Works and my Skills</p>
                </Container>
            </header>
            
            {/* About Section */}
            <section id="about" className="py-5">
                <Container>
                    <Row>
                        <Col md={6} className="mb-3">
                            <a href='/about'><h2 className='me'>About Me</h2></a>
                        </Col>
                        <Col md={6}>
                            <img src= {genie} alt="Gentle Okhai" className='img-fluid' />
                        </Col>
                        <div className="txt">
                            <p>Hello, good day </p>
                            <p>My name is Gentle Okhai, a software engineer temporarily based in Benin City Nigeria.</p>
                            <p>I currently specialize in web and desktop application development.</p>
                            <p>I am passionate about programming in general and have a strong background in working with servers.</p>
                        </div>
                    </Row>
                </Container>
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="bg-light py-5">
                <Container>
                    <a href='/projects'><h2 className="text-center mb-4">My Projects</h2></a>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={logSig} alt="Login-Signup Page" />
                                <Card.Body>
                                    <Card.Title>Project One</Card.Title>
                                    <Card.Text>
                                    This application is a simple frontend project containing login and signup functionalities.
                                    The application is built using modern web development technologies to ensure a responsive and user-friendly experience!
                                    </Card.Text>
                                    <Button variant="primary" href="https://github.com/gentleokhai/Login-SignUp">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={calc} />
                                <Card.Body>
                                    <Card.Title>Project Two</Card.Title>
                                    <Card.Text>
                                        Using the Electron framework, I built a basic desktop app(A calculator!)
                                    </Card.Text>
                                    <Button variant="primary" href="#!">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="path_to_project_image3.jpg" />
                                <Card.Body><Card.Title>Project Three</Card.Title>
                                    <Card.Text>Brief description of Project Three.</Card.Text>
                                    <Button variant="primary" href="#!">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5">
                <Container>
                    <a href='/contact'><h2 className="text-center mb-4">Contact Me</h2></a>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhoneNumber">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="number" placeholder="Phone Number" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;