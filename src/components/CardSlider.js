import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function CardSlider() {
    return (
        <div style={{padding:"20px"}}>
            <Carousel varient="dark" indicators={false}>
                <Carousel.Item>
                    <CardGroup style={{display:"flex" , gap:"20px", justifyContent:"space-around"}}>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup style={{display:"flex" , gap:"20px", justifyContent:"space-around"}}>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ height: "250px", width: "250px" }}>
                            <Card.Img src="bookmyshow.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CardSlider;
