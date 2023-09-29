import React from 'react'
import { useState } from 'react';
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons';
import {shoes, statistics} from '../Constents'
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../Components/ShoeCard';
const Hero = () => {
  const[bigShoeImg, setbigShowImg]= useState(bigShoe1)

  return (
    
    <section
    id='Home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen 
     gap-10 max-container '>

      <div className=' relative xl:w-2/5 flex flex-col justify-center
      item-start w-full max xl:padding-x pt-28 '>
        <p className="text-xl font-montserrat
        text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl
        max-sm:text-[72px]
        max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white
          xl:whitespace-nowrap relative z-10 pr-8">The New Arrival</span><br/>
          <span className="text-coral-red
          inline-bloack mt-3">Nike</span>  Shoes
        </h1>
        <p className="font-montserrat text-slate-grey first-letter:text-lg leading-8 mt-6 mb-14
        sm:max-w-sm">Discovers Stylish Nike arrivals , quality comfort , 
          and innovation for your active life.
        </p>
        <Button label="Shop Now"
        iconURL={arrowRight}/>

        <div 
        className='flex justify-center item-start flex-wrap w-full mt-20
        gap-16'>
          {statistics.map((stat, index)=>(
            <div key={stat.label}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat
              text-slate-grey ">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
      <div className="relative flex-1
      flex justify-center items-center sl:min-h-screen
      max-xl:py-40 bg-primary bg-hero
      bg-cover bg-center ">
        <img src={bigShoeImg} alt="shoeCollection" 
        width={610}
        height={500}
        className='object-contain relative
        z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute
        -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
              changeBigShoeImage={(shoe)=> setbigShowImg(shoe)}
              bigShoeIMG={bigShoeImg}
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
