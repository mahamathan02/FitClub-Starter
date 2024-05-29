import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z06fqiw', 'template_f15ifzt', form.current, 'UJ4yiHwv_nj8n8Grt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join-us">
        
        <div className="left-j">
            <hr />

            <div>
            
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>

                <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US ?</span>
            </div>
        </div>

        <div className="right-j">

            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email  address...' />
                <button className='btn'>Join Now</button>
            </form>

        </div>

    </div>
  )
}

export default Join