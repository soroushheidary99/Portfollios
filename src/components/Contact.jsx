import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import Button from './parts/Button.jsx'

const Contact = () => {
    return (<>

        <section id="Contact">
                <div className='container contact__container'>


                <div className='contact__options'>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h6>Email</h6>
                        <h6>soroush.h.dev@gmail.com</h6>
                        <a href='mailto:soroush.h.dev@gmail.com'>Send a message</a>
                    </div>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h6>WhatsApp</h6>
                        <h6>+989181099400</h6>
                        <a href='https://api.whatsapp.com/send?phone=+989181099400'>Send a message</a>
                    </div>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h6>Github</h6>
                        <h6>soroushheidary99</h6>
                        <a href='https://github.com/soroushheidary99'>Send a message</a>
                    </div>
                </div>


                
                <form id='form_contact' action=''>
                    <input type='text' name='name' placeholder='Full Name' required /> 
                    <input type='email' name='email' placeholder='Email' required />
                    <textarea type='message' rows='7' placeholder='Your Comment' required></textarea> 
                    <div className='cantact_button'><Button>Submit</Button></div>
                </form>
            </div>
        </section> 
        
    </>)
}

export default Contact
