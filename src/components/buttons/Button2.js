import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import joursey from '../img/joursey.jpg';
import leptop from '../img/leptop.png';
import shoes from '../img/shoes.jpg';
import Button from './Button.module.css';

function Button2() {
    return (
        <div className={Button.button2}>
            <div className={Button.container2}>

              <ul>
              <li>Consumer Electronics</li>
                <li>Apparel</li>
                <li>Vehicales part an Acceesories</li>
                <li>Sports and Entertainments</li>
                <li>Machynery</li>
                <li>Home and Garden</li>
                <li>Beauty and Personal Care</li>
                <li>All Categories</li>
              </ul>
            </div>

            <div className={Button.container2}>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src={shoes}
          alt="This is shoes"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 "
          src={leptop}
          alt="This is leptop"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={joursey}
          alt="this is Joursey"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
              </div>
            

            <div className={Button.container2}>
                <button>Selected Machynery</button>
                <h3>Woodworking  Machynery</h3>
                <h3>plustic and Rubber Machynary</h3>
                <h3>Laser and Mashine Tool Equipment</h3>


            </div>
            
        </div>
    );
}

export default Button2;