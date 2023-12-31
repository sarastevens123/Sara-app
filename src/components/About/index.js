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
                I am a software engineering graduate of Hackbright Academy, a 12-week immersive coding bootcamp for women and gender-diverse people and current City College of San Francisco student with a focus on Technology and Computer Science. I am passionate about building web applications using Python, JavaScript, React, SQL, and AWS. I have completed several projects that demonstrate my proficiency in full-stack development, such as a personal portfolio website, and a restaurant review platform.
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