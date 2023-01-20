import React from 'react'
import styles, {layout} from '../style'
import { feedback } from '../constants'
import FeedBackCard from './FeedBackCard'

const Testimonial = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col `} >
      <div className='w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative' >
        <h1 className={`${styles.heading2} text-center`} >What people are <br className='sm:block hidden' /> saying about us</h1>
        <div className='w-full md:mt-0 mt-6 flex justify-center' >
          <p className={`${styles.paragraph} text-center max-w-[450px] `} > Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

      </div>

        <div className='flex flex-wrap sm:justify-center w-full feedback-container relative z-[1]' >
          {feedback.map((feedback,index) => (
            <FeedBackCard key={index} {...feedback} />
          ))}
        </div>
    </section>
  )
}

export default Testimonial