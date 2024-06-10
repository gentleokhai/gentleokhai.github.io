import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import genie from './DSC_8234.JPG';

const About = () => {
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
                            <p>
                                Gentle Okhai is a highly skilled and detail-oriented Full Stack Developer with over two years of experience in 
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
        </div>
    );
}
export default About;