import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function Premiere() {
    return (
        <div style={{ padding: "20px", background: "grey" }}>
            <h2 style={{ color: "white" }}>Premieres</h2>
            <h5 style={{ color: "white" }}>Brand new releases every Friday</h5>
            <Carousel varient="dark" indicators={false}>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="bookmyshow.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Premiere;
