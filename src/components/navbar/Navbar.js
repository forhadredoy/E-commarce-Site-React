import { faCartPlus, faMessage, faPeopleCarry, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../img/logo.jpg';
import Nav from './Nav.module.css';

function Navbar() {
    const [name, setName] = useState("");
    const ref = useRef(null);

    const handleChange= (e)=>{
        setName (e.target.value);
        ref.current.focus();

    }
    return (
       <div className={Nav.main}>
         <div className={Nav.nav}>

<div className={Nav.img1}>
    <img src={logo}/>

</div>

<div className={Nav.input}>
    <form className={Nav.form}>
        <input type='text' value={name} ref={ref} placeholder='What are you looking for?' onChange={handleChange}/>
    </form>
 

</div>
<div className={Nav.navigation}>

<nav className={Nav.navbar}>
    <ul>
        
        <li>
        <FontAwesomeIcon icon={faUser} className={Nav.fontawesome} /><Link to="/sign" className={Nav.sign}>Sign</Link>
        </li>
        <li>
        <FontAwesomeIcon icon={faMessage} className={Nav.fontawesome} /><Link to="/messages" className={Nav.messages}>Messages </Link>
        </li>
        <li>
        <FontAwesomeIcon icon={faPeopleCarry} className={Nav.fontawesome}  /><Link to="/orders" className={Nav.orders}>Orders</Link>
        </li>
        <li>
        <FontAwesomeIcon icon={faCartPlus} className={Nav.fontawesome} /> <Link to="/cart"className={Nav.cart}>Cart</Link>
        </li>
    </ul>
</nav>

</div>

</div>


        <div className="content">
        <Outlet />
      </div>
        
       </div>
    );
}

export default Navbar;