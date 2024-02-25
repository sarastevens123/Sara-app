import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/logo-s.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="sub-logo" src={LogoS} alt="logo" />
            
            
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color= "#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
         <li>
           <a
             href="https://www.linkedin.com/in/-sara-stevens/"
             target="_blank"
             rel="noreferrer"
           >
             <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
           </a>
         </li>
         <li>
           <a
             href="https://github.com/sarastevens123/"
             target="_blank"
             rel="noreferrer"
           >
             <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
           </a>
         </li>
         </ul>
        
    </div>
    )
};




export default Sidebar;