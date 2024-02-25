import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faGitAlt, faReact, faHtml5, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animation');


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        ind={15}
                    />
                </h1>
                <p>
                    My journey into software engineering began three years ago when I enrolled at Hackbright Academy. There, I honed her skills in Python, Flask, SQL, HTML, CSS, and JavaScript, as well as implementing the design and deployment of a full-stack web application. My curiosity and thirst for knowledge led me to pursue further education at City College of San Francisco, where I continue to expand my skills in computer science and information technology. Throughout my academic and professional endeavors, I have demonstrated proficiency in a range of programming languages and frameworks, including Python, JavaScript, React, Flask, and Bootstrap. 
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} colors="#DD0031" />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} colors="#f06529" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} colors="#28A4D9" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} colors="#5ED4F4" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} colors="EFD81D" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} colors="EC4V28" />
                    </div>

                    




                    </div>
                </div>

            </div>
        
    )
};
export default About;