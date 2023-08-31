
import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return(
        
        <div className='pt-5'>
            <ul className="NavList">
                <li> <Link to="/" className='link'>Home</Link></li>
                <li><Link to="aboutus" className='link'>AboutUs</Link></li>
                <li><Link to="contact" className='link'>Contact</Link></li>
                <li><Link to ='login' className='link'>Login</Link></li>
            </ul>
            </div>

    )


}

export default Navbar;