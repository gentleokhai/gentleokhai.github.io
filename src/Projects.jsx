import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import logSig from './log-sig.jpg';
import calc from './calc.png';
import './styles/Main.css';
const Projects = () => {
   return (
    <div>
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
                                    <Card.Text>The simplest learning management system.</Card.Text>
                                    <Button variant="primary" href="https://github.com/gentleokhai/Learning_management_system">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <b className='txt'>To Find out more projects go to <a href='https://github.com/gentleokhai/'>My Github</a></b>
                </Container>
            </section>
    </div>
   );
}

export default Projects;