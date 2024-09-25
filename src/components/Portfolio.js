import React, { useEffect, useState } from 'react'
import { AppText, portfolio } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from './../assets/index'
const Portfolio = () => {

    const [portfolioList,setPortfolioList]=useState([]);
    const [portfolioListOrg,setPortfolioListOrg]=useState([]);

    useEffect(()=>{
        
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    },[])
    const filterPortfolio=(type)=>{
        if(type=='All')
        {
            setPortfolioList(portfolioListOrg);
        }
        else{
           const result= portfolioListOrg.filter(item=>item.type==type);
           setPortfolioList(result)
           console.log(result) 
        }
    }
  return (
    <div className='mx-auto max-w-screen-2xl mt-5 flex justify-center flex-col'>
        <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio}  className='text-blue-600'/>
        <img src={robo} className="w-[70px] ml-5 animate-bounce"/>
        </div>
        <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>
            <button onClick={()=>filterPortfolio('All')} className='border-blue-600 border-2 
            text-blue-600 focus:text-white
            active:bg-blue-500 p-1 px-4 rounded-md
            focus:ring-blue-300 focus:bg-blue-600 focus:ring '>All</button>
             <button  onClick={()=>filterPortfolio('network security')}  className='border-blue-600 border-2 
            text-blue-600 focus:text-white
            active:bg-blue-500 p-1 px-4 rounded-md
            focus:ring-blue-300 focus:bg-blue-600 focus:ring '>Cloud Security</button>
             <button onClick={()=>filterPortfolio('mobile Application security')} className='border-blue-600 border-2 
            text-blue-600 focus:text-white
            active:bg-blue-500 p-1 px-4 rounded-md
            focus:ring-blue-300 focus:bg-blue-600 focus:ring '>Web App security</button>
             <button onClick={()=>filterPortfolio('App security')} className='border-blue-600 border-2 
            text-blue-600 focus:text-white
            active:bg-blue-500 p-1 px-4 rounded-md
            focus:ring-blue-300 focus:bg-blue-600 focus:ring '>Mobile App security</button>
        </div>
        <div className='grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 '>
            {portfolioList.map((item,index)=>(
                <div className='p-2 flex flex-col m-2 rounded-lg bg-blue-100
                transition-all ease-in-out group hover:scale-110'>
                    <img src={item.imageUrl} className="h-[180px] object-cover rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                    <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio