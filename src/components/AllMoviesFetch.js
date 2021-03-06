import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from 'react';

function AllMoviesFetch() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get('https://bms-backend-expressnode.herokuapp.com/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div>
            <Container fluid style={{ padding: "5%", background: "pink" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) =>
                        < Col onClick={() => window.location.href = "/movie/" + mov._id} id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                            <Card>
                                <Card.Img variant="top" src={mov.image} height="280px" />
                                <Card.Body style={{ height: "100px" }}>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div >
    );
}

export default AllMoviesFetch;