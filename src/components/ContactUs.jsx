import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contactusbg, phone } from '../assets'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
import { PaperAirplaneIcon } from "@heroicons/react/outline";

function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mr3q4p5', 'template_s5v68zf', form.current, {
        publicKey: 'Y2ibQG8GIlt0B28dg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('message sent successful')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id="contact" className='mx-auto max-w-screen-2xl flex flex-col justify-center mt-5'>
        <div className='flex flex-row  justify-center '>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us}/>
        <img src={phone} className="w-[80px] ml-4"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
            <img src={contactusbg} className="w-[300px] mr-10"/>
    <div className='w-full' >
    <form  ref={form} onSubmit={sendEmail} className='flex flex-col'>
      <label>Name</label>
      <input className='h-10 border-3 mt-2' type="text" name="to_name" />
      <label>Email</label>
      <input className='h-10 border-3 mt-2' type="email" name="from_name" />
      <label>Message</label>
      <textarea className='h-300 border-3 mt-2' name="message" />
      <input value='send'type="submit"  className='transition-all ease-in-out hover:scale-110 bg-blue-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md' />
    </form>
  </div>
 </div>   
        </div>
  )
}

export default ContactUs