import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { useRef } from "react";

const Contact = () =>  {

    const [letterClass, setLetterClass] = useState('text-animation')
    const refForm = useRef();

    useEffect (() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('gmail', 'template_ge1lgzo' , refForm.current, 'bbTseBNjiC_0Wh_Ld')
            .then(
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')

                }
            )
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
                I am looking for opportunities where I can work on innovative projects while gaining invaluable hands-on experience guided by strong mentorship and leadership that truly champions diversity.
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