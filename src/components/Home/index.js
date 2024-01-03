import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/logo-s.png';

import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'r', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx= {15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx= {22} />
                <br />
                </h1>
                <h2> FullStack Developer / Python Expert / Programmer</h2>
                <Link to="/contact" className="flat-button">Contact me!</Link>            
            </div>
            
        </div>
    )
}

export default Home;