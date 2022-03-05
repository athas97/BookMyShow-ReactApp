import Carousel from 'react-bootstrap/Carousel';
import './slider.css'
function SliderImages() {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="./slider.png"
                        alt="First slide"
                        height={350}
                        width={1200}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="./slider.png"
                        alt="Second slide"
                        height={350}
                        width={1200}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="./slider.png"
                        alt="Third slide"
                        height={350}
                        width={1200}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default SliderImages;
