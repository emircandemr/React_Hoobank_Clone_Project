import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={` flex md:flex-row flex-col ${styles.paddingY} `} >
      <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6`} >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-lg mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
           Discount For {" "}
          <span className='text-white'> 1 Month </span>
           Account
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full' >
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] text-white '>
            The Next <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Generation</span>
          </h1>
          <div className='ss:flex hidden text-white md:mr-4 mr-0' >
              <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] w-full text-white'>
          Payment Method.
        </h1>

      </div>
    </section>
  )
}

export default Hero