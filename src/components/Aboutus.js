import React from 'react';
import { laptop, wave } from '../assets';
import { aboutSection, AppText } from '../Constants';

const AboutMe = () => {
  return (
    <div id='aboutUs' className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 items-center' >
      <img src={wave} className='w-screen absolute'/>
      <img src={laptop} className='absolute mt-[-130px] md:mt-[-200px] w-[200px] md:w-[300px]'/>
      <div className='bg-blue-800  pt-6 h-[500px] '>
        <h1 className='text-[50px] text-white text-center'> {AppText.About} <span className='text-black'>{AppText.Us}</span></h1>
        <h2 className='text-white mt-10 text-[16px] md:px-64 lg:px-80 text-center'>{AppText.aboutUsDescripion}</h2>
      </div>
      <div className=' md:flex-row flex flex-col w-full justify-around items-center mt-[-40px] px-32'>
        {
          aboutSection.map((item,index)=>( 
            <div className='group hover:bg-blue-600 text-white mb-5 p-7  items-center rounded-2xl'>
             <article className="group ">
  <img
    alt=""
    src={item.image}
    className=" h-100 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400">
    {item.desc}
    </p>
  </div>
</article>
              
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default AboutMe;
