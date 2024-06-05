import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';

const Contact = () => {
    return (
        <section id="contact" className="py-5">
        <Container>
            <h2 className="text-center mb-4">Contact Me</h2>
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
                        <Form.Group className="mb-3" controlId="formEmail">
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
        <p className='txt'>You can also contact me at gentleokhaiX@gmail.com||+2349065070051</p>
        <div class="home-sci">
            <a href="https://www.instagram.com/sparkgenie1/"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/gentle235/"><i class='bx bxl-linkedin'></i></a>
            <a href="https://github.com/gentleokhai"><i class='bx bxl-github'></i></a>            
        </div>
    </section>
)};

export default Contact;