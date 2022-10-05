import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import one from '../img/31.png';
import two from '../img/32.png';
import three from '../img/33.png';
import four from '../img/34.png';
import five from '../img/35.png';
import Button from './Button.module.css';



function Button7() {

    const navigate = useNavigate();
     const handleClick =()=>{
        navigate ('/orders')

     }

     const navigate1 = useNavigate();
     const handleClick1 =()=>{

        navigate1('/cart')

     }


    return (
        <div className={Button.container8}>

            <div className={Button.item} id={Button.items}>

                <img src={one} onClick={handleClick}/>
                <h3>Hijab</h3>
                <p className={Button.paragraph1}>to the claims of duty or the obligations </p>
                <p className={Button.paragraph2} id={Button.price}>$74</p>
                <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar}className={Button.icon2} /> <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar} className={Button.icon3}/><FontAwesomeIcon  icon={faStar}  className={Button.icon3}/>
                <div className={Button.element} id={Button.one} onClick={handleClick1}>
                    <p className={Button.paragraph3} >Add to Cart</p>
                    </div>

                </div>


                 <div className={Button.item} id={Button.items1}>

                <img src={two}/>
                <h3>Bag</h3>
                <p className={Button.paragraph1}>to the claims of duty or the obligations </p>
                <p className={Button.paragraph2} id={Button.price1}>$74</p>
                <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar}className={Button.icon2} /> <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar} className={Button.icon3}/><FontAwesomeIcon  icon={faStar}  className={Button.icon3}/>
                <div className={Button.element} id={Button.two}>
                    <p className={Button.paragraph3} >Add to Cart</p>
                    </div>

                </div>


                
                 <div className={Button.item} id={Button.items2}>

                <img src={three}/>
                <h3>Borka</h3>
                <p className={Button.paragraph1}>to the claims of duty or the obligations </p>
                <p className={Button.paragraph2} id={Button.price2}>$74</p>
                <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar}className={Button.icon2} /> <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar} className={Button.icon3}/><FontAwesomeIcon  icon={faStar}  className={Button.icon3}/>
                <div className={Button.element} id={Button.three}>
                    <p className={Button.paragraph3} >Add to Cart</p>
                    </div>

                </div>



                
                 <div className={Button.item} id={Button.items3}>

                <img src={four}/>
                <h3>Body Sprey</h3>
                <p className={Button.paragraph1}>to the claims of duty or the obligations </p>
                <p className={Button.paragraph2} id={Button.price3} >$74</p>
                <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar}className={Button.icon2} /> <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar} className={Button.icon3}/><FontAwesomeIcon  icon={faStar}  className={Button.icon3}/>
                <div className={Button.element} id={Button.four}>
                    <p className={Button.paragraph3} >Add to Cart</p>
                    </div>

                </div>




                
                 <div className={Button.item} id={Button.items4}>

                <img src={five}/>
                <h3>Sticker</h3>
                <p className={Button.paragraph1} >to the claims of duty or the obligations</p>
                <p className={Button.paragraph2} id={Button.price4}>$74</p>
                <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar}className={Button.icon2} /> <FontAwesomeIcon  icon={faStar} className={Button.icon2}/> <FontAwesomeIcon  icon={faStar} className={Button.icon3}/><FontAwesomeIcon  icon={faStar}  className={Button.icon3}/>
                <div className={Button.element} id={Button.five}>
                    <p className={Button.paragraph3} >Add to Cart</p>

                </div>

            </div>



         
                
            </div>
            
       
    );
}

export default Button7;