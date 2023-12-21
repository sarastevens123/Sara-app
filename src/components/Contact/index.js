import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () =>  {

    const [letterClass, setLetterClass] = useState('text-animation')
    const refForm = useRef();

    useEffect (() => {
        return setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('gmail','Sara_5029',refForm.current, 'your_public_key')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                        idx={15}

                    />
                </h1>
                <p>
                    Looking for all early career postions 
                </p>

                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type= "text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type= "email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />                            
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>

    )
}

export default Contact;