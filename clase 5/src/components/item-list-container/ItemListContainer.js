import { Carousel } from "react-bootstrap";
import logo from './probando.png';



const NavBar = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={logo}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Ejemplo 1</h3>
        <p>Ejemplo 1</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={logo}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Ejemplo 2</h3>
        <p>Ejemlo 2</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={logo}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Ejemplo 3</h3>
        <p>Ejemplo 3</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default NavBar;
