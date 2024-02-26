import { Link, NavLink } from 'react-router-dom';
import './index.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
    <div className='nav-bar'>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color= '#FFCF96' />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#FFCF96' />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#FFCF96' />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} color='#FFCF96' />
            </NavLink>
        </nav>

        <ul>
         <li>
           <a
             href="https://www.linkedin.com/in/-sara-stevens/"
             target="_blank"
             rel="noreferrer"
           >
             <FontAwesomeIcon icon={faLinkedin} color='#FFCF96' />
           </a>
         </li>
         <li>
           <a
             href="https://github.com/sarastevens123/"
             target="_blank"
             rel="noreferrer"
           >
             <FontAwesomeIcon icon={faGithub} color='#FFCF96' />
           </a>
         </li>
         </ul>
        
    </div>
    )
};




export default Sidebar;