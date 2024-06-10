// // import React, { useState } from 'react';
// // import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './styles/Main.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     message: ''
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     const response = await fetch('https://formspree.io/f/mnqekrzb', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         number: formData.number,
//         message: formData.message
//       })
//     });

//     if (response.ok) {
//       setStatus('Message sent successfully!');
//     } else {
//       setStatus('Failed to send message.');
//     }

//     setFormData({
//       name: '',
//       email: '',
//       number: '',
//       message: ''
//     });
//   };

//     // return (
//     //     <section id="contact" className="py-5">
//     //     <Container>
//     //         <h2 className="text-center mb-4">Contact Me</h2>
//     //         <Row className="justify-content-center">
//     //             <Col md={6}>
//     //                 <Form>
//     //                     <Form.Group className="mb-3" controlId="formName">
//     //                         <Form.Label>Name</Form.Label>
//     //                         <Form.Control type="text" placeholder="Enter your name" required />
//     //                     </Form.Group>
//     //                     <Form.Group className="mb-3" controlId="formEmail">
//     //                         <Form.Label>Email</Form.Label>
//     //                         <Form.Control type="email" placeholder="Enter your email" required />
//     //                     </Form.Group>
//     //                     <Form.Group className="mb-3" controlId="formEmail">
//     //                         <Form.Label>Phone number</Form.Label>
//     //                         <Form.Control type="number" placeholder="Phone Number" required />
//     //                     </Form.Group>
//     //                     <Form.Group className="mb-3" controlId="formMessage">
//     //                             <Form.Label>Message</Form.Label>
//     //                             <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
//     //                     </Form.Group>
//     //                     <Button variant="primary" type="submit">Submit</Button>
//     //                 </Form>
//     //             </Col>
//     //         </Row>
//     //     </Container>
//     //     <p className='txt'>You can also contact me at gentleokhaiX@gmail.com||+2349065070051</p>
//     //     <div class="home-sci">
//     //         <a href="https://www.instagram.com/sparkgenie1/"><i class='bx bxl-instagram'></i></a>
//     //         <a href="https://www.linkedin.com/in/gentle235/"><i class='bx bxl-linkedin'></i></a>
//     //         <a href="https://github.com/gentleokhai"><i class='bx bxl-github'></i></a>            
//     //     </div>
//     // </section>
// )};

// export default Contact;


import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post('https://formspree.io/f/mayvbjkq', formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message.');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
};

export default Contact;
