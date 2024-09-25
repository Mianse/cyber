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
      <input className='h-10 border-4 mt-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' type="text" name="to_name" />
      <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <input className='h-10 border-4 mt-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' type="email" name="from_name" />
      <label className="block text-sm font-medium leading-6 text-gray-900">Message</label>
      <textarea  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
 name="message" />
              <button
                 value='send'
                type="submit"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
    </form>
  </div>
 </div>   
        </div>
  )
}

export default ContactUs
