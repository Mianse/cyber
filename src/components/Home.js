import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import { homeImage } from './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
 


<section id='home'
  className="relative bg-[url(https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-blue-900/75 sm:bg-transparent sm:from-blue-900/95 sm:to-blue-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
      Finding Your "Forever Home" in Cybersecurity

        <strong className="block font-extrabold text-blue-700"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
      Secure Environment:

Just as a "Forever Home" is a safe and comfortable place, a secure digital environment protects sensitive data and systems from threats.
Tailored Solutions:

Every organization has unique needs. Cybersecurity solutions should be customized to fit those specific requirements, much like finding a home that suits individual preferences.
Long-Term Strategy:

A "Forever Home" implies stability and a long-term commitment. Similarly, effective cybersecurity requires ongoing strategies, regular updates, and continuous monitoring to adapt to evolving threats.
Risk Management:

Just as you assess potential homes for safety and suitability, organizations must evaluate their vulnerabilities and implement risk management practices to protect their assets.
Trust and Assurance:

A home offers security and peace of mind. In cybersecurity, building trust with clients through transparent practices and reliable protection fosters confidence in the solutions provided.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue shadow hover:text-blue focus:outline-none focus:ring active:text-black sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Home
