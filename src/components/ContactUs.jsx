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
      <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
      <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter your name"
          />

      <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

      <label className="block text-sm font-medium leading-6 text-gray-900">Message</label>
  <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
              <button
                 value='send'
                type="submit"
                  className="rounded-md bg-blue-500 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Send
                </button>
    </form>
  </div>
 </div>   
        </div>
  )
}

export default ContactUs
