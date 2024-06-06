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
                        <p>
                                Highly skilled and detail-oriented Full Stack Developer with over two years of experience in 
                                designing, developing, and maintaining complex web applications. 
                                <p>Proficient in front-end and back-end technologies, including JavaScript, React,  Node.js, Express, and Monogodb.</p> 
                                <p>Demonstrated expertise in developing scalable, efficient, and user-friendly solutions 
                                with a strong focus on responsive design and performance optimization.</p>
                                <p>Adept at working in agile environments, collaborating cross-functionally with designers, product 
                                managers, and other developers to deliver high-quality software solutions.</p>
                                Highly committed to continuous learning and keeping up with the latest industry trends and technologies.
                                <p>Technical Skills:</p>
                                <b><u>Front end:</u></b>
                                <ul>HTML5, CSS3, JavaScript (ES6+)</ul>
                                <ul>React, Vue</ul>
                                <ul>Bootstrap, Tailwind CSS, SASS</ul>
                                <b><u>Back-End:</u></b>
                                <ul>Node.js, Express.js</ul>
                                <ul>Python (FastApi, Flask)</ul>
                                
                                <b><u>Databases:</u></b>
                                <ul>MongoDB, MySQL</ul>
                                <b><u>DevOps & Tools:</u></b>
                                <ul>Git, GitHub </ul>
                                <ul>Docker </ul>
                                <ul>AWS, Azure, Google Cloud Platform</ul>
                                <b><u>Others:</u></b>
                                <ul>RESTFUL APIs</ul>
                                <ul>Technical writing</ul>
                                <ul>Cryptography</ul>
                                <b><u>Professional Experience</u></b>
                                <p>I have had experience building personal websites for people and also teaching individuals web development</p>

                                I've Lead the development and maintenance of web applications using React, Node.js, and MongoDB, improving
                                performance by 30%.
                                Collaborated with cross-functional teams to define, design, and ship new features.
                                Implemented RESTful APIs and integrated third-party services to enhance application functionality.
                                Optimized application performance and scalability through code reviews and refactoring.
                                Mentored junior developers, fostering a culture of continuous improvement and knowledge sharing.
                                Full Stack Developer!
                                Participated in all phases of the software development lifecycle, from requirements gathering to deployment and maintenance.
                                Ensured high performance and responsiveness of applications by implementing efficient code and utilizing caching strategies.
                                Worked closely with designers to create user-friendly interfaces and ensure cross-browser compatibility.
                                <p>To find out more about projects click this <a href='/projects'>link</a></p>
                                I am a hundred percent available for projects and roles
                                </p>
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
                                <Card.Img variant="top"/>
                                <Card.Body><Card.Title>Project Three</Card.Title>
                                <Card.Text>The simplest learning management system. Sorry, no picture is available as it's purely backend</Card.Text>
                                    <Button variant="primary" href="https://github.com/gentleokhai/Learning_management_system">View Details</Button>
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