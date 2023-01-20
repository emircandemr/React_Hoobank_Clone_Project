import React, { useState } from 'react'
import styles from './style'
import {Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonial,Clients,CTA,Footer} from './components/'

const App = () => {

  const [scrolling,setIsScrolling] = useState(false)

  window.onscroll = () => {
    setIsScrolling(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className='bg-primary w-full overflow-hidden scroll-bar'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`w-full px-16 fixed top-0 z-50 ${scrolling ? 'bg-gray-gradient' : '' } `}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth} mt-16 sm:mt-6 `}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonial></Testimonial>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>

    </div>
  )
}

export default App