import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function BootStrap() {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const [isLiked_1, setIsLiked_1] = useState(false);
    const [isLiked_2, setIsLiked_2] = useState(false);
    const [isLiked_3, setIsLiked_3] = useState(false);
    const handleLikeClick_1 = () => {
        setIsLiked_1(!isLiked_1);
    };
    const handleLikeClick_2 = () => {
        setIsLiked_2(!isLiked_2);
    };
    const handleLikeClick_3 = () => {
        setIsLiked_3(!isLiked_3);
    };

    const [isComment_1, setIsComment_1] = useState(false);
    const [isComment_2, setIsComment_2] = useState(false);
    const [isComment_3, setIsComment_3] = useState(false);
    const handleCommentClick_1 = () => {
        setIsComment_1(!isComment_1);
    };
    const handleCommentClick_2 = () => {
        setIsComment_2(!isComment_2);
    };
    const handleCommentClick_3 = () => {
        setIsComment_3(!isComment_3);
    };

    const [isShare_1, setIsShare_1] = useState(false);
    const [isShare_2, setIsShare_2] = useState(false);
    const [isShare_3, setIsShare_3] = useState(false);
    const handleShareClick_1 = () => {
        const imageUrl_1 = "https://i.ytimg.com/vi/O_DMsK3Ar5k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAa9-3EZwcWLE9LrlBPFh-npaPYWw";
        navigator.clipboard.writeText(imageUrl_1)
        .then(() => {
            alert("Image URL copied to clipboard!");
            setIsShare_1(true);
        })
        .catch(err => {
            console.error("Failed to copy URL: ", err);
        });
    };
    const handleShareClick_2 = () => {
        const imageUrl_2 = "https://img.jagranjosh.com/images/2024/September/592024/ganesh-chaturthi.jpg";
        navigator.clipboard.writeText(imageUrl_2)
        .then(() => {
            alert("Image URL copied to clipboard!");
            setIsShare_2(true);
        })
        .catch(err => {
            console.error("Failed to copy URL: ", err);
        });
    };
    const handleShareClick_3 = () => {
        const imageUrl_3 = "https://i.pinimg.com/564x/7c/24/89/7c24893aed3a28f8578206a4be0e05c9.jpg";
        navigator.clipboard.writeText(imageUrl_3)
        .then(() => {
            alert("Image URL copied to clipboard!");
            setIsShare_3(true);
        })
        .catch(err => {
            console.error("Failed to copy URL: ", err);
        });
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <div className='form_div'>
                <Form className='form' noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check style={{marginLeft: '36%'}}
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <center>
                        <Button type="submit">Submit form</Button>
                    </center>
                </Form>
            </div>

            <center>
                <CardGroup className='mt-2'>
                    <Card className='m-3 card_div'>
                        {/* <Card.Img className='card_img' style={{marginLeft: '-1%'}} variant="top" src="https://img.jagranjosh.com/images/2024/March/832024/mahashivratri-2024.webp" /> */}
                        <div id='card_img'>
                            <Card.Img className='card_img' style={{marginLeft: '-1%'}} variant="top" src="https://i.ytimg.com/vi/O_DMsK3Ar5k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAa9-3EZwcWLE9LrlBPFh-npaPYWw" />
                        </div>
                        <Card.Body>
                        <Card.Title>Maha Shivratri</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className='card_footer'>
                            <button onClick={handleLikeClick_1}>
                                {isLiked_1 ? (
                                    <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
                                ) : (
                                    <i className="fa-regular fa-heart"></i>
                                )}
                            </button>

                            <button onClick={handleCommentClick_1}>
                                {isComment_1 ? (
                                    <i className="fa-solid fa-comment-dots" style={{ color: 'blue' }}></i>
                                ) : (
                                    <i class="fa-regular fa-comment-dots"></i>
                                )}
                            </button>

                            <button onClick={handleShareClick_1}>
                                {isShare_1 ? (
                                    <i className="fa-solid fa-share-from-square" style={{ color: 'rgb(20, 244, 9)' }}></i>
                                ) : (
                                    <i class="fa-regular fa-share-from-square"></i>
                                )}
                            </button>
                        </Card.Footer>
                    </Card>
                    <Card className='m-3 card_div'>
                        <div id='card_img'>
                            <Card.Img className='card_img' variant="top" src="https://img.jagranjosh.com/images/2024/September/592024/ganesh-chaturthi.jpg" />
                            {/* <Card.Img className='card_img' variant="top" src="https://d35y6w71vgvcg1.cloudfront.net/media/2020/09/vinayaka-chaturthi-worship-lord-ganesha-for-happiness-and-prosperity-in-life_730X365.jpg" /> */}
                            {/* <Card.Img className='card_img' variant="top" src="https://assets.thehansindia.com/h-upload/feeds/2019/09/01/211839-pooja.jpg" /> */}
                        </div>
                        <Card.Body>
                        <Card.Title>Ganesh Chaturthi</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className='card_footer'>
                            <button onClick={handleLikeClick_2}>
                                {isLiked_2 ? (
                                    <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
                                ) : (
                                    <i className="fa-regular fa-heart"></i>
                                )}
                            </button>

                            <button onClick={handleCommentClick_2}>
                                {isComment_2 ? (
                                    <i className="fa-solid fa-comment-dots" style={{ color: 'blue' }}></i>
                                ) : (
                                    <i class="fa-regular fa-comment-dots"></i>
                                )}
                            </button>

                            <button onClick={handleShareClick_2}>
                                {isShare_2 ? (
                                    <i className="fa-solid fa-share-from-square" style={{ color: 'rgb(20, 244, 9)' }}></i>
                                ) : (
                                    <i class="fa-regular fa-share-from-square"></i>
                                )}
                            </button>
                        </Card.Footer>
                    </Card>
                    <Card className='m-3 card_div'>
                        <div id='card_img'>
                            <Card.Img className='card_img' variant="top" src="https://i.pinimg.com/564x/7c/24/89/7c24893aed3a28f8578206a4be0e05c9.jpg" />
                        </div>
                        <Card.Body>
                        <Card.Title>Janmashtami</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className='card_footer'>
                            <button onClick={handleLikeClick_3}>
                                {isLiked_3 ? (
                                    <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
                                ) : (
                                    <i className="fa-regular fa-heart"></i>
                                )}
                            </button>

                            <button onClick={handleCommentClick_3}>
                                {isComment_3 ? (
                                    <i className="fa-solid fa-comment-dots" style={{ color: 'blue' }}></i>
                                ) : (
                                    <i class="fa-regular fa-comment-dots"></i>
                                )}
                            </button>

                            <button onClick={handleShareClick_3}>
                                {isShare_3 ? (
                                    <i className="fa-solid fa-share-from-square" style={{ color: 'rgb(20, 244, 9)' }}></i>
                                ) : (
                                    <i class="fa-regular fa-share-from-square"></i>
                                )}
                            </button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </center>
        </div>
    )
}



