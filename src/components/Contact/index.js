import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import { Redirect } from "react-router-dom";

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

        emailjs.sendForm('gmail', 'template_ge1lgzo', refForm.current, 'bbTseBNjiC_0Wh_Ld')
            .then((result) => {
                console.log(result.text);
                alert('Message successfully sent!');
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
        
        </>

    )
}

export default Contact;