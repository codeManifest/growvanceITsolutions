import { useState } from 'react'


import './App.css'
import Hero from './components/ui/Hero'
import Card_section from './components/ui/Card_section'
import Whywe from './components/ui/whywe'

import TrustedBySection from './components/ui/TrustedBySection'
import Para_card from './components/reuse/Para_card'
import Faq_section from './components/ui/Faq_section'
import Testimonials from './components/ui/Testimonials'
import Price_card from './components/ui/Price_card'
import Contact_form from './components/ui/Contact_form'
import Content_section from './components/ui/Content_section'
import Content from './components/reuse/Content'
import RecentProjects from './components/RecentProjects'
import Our_approach from './components/Our_approach'
import Our_team_comp from './components/Our_team_comp'

import SuccessStorySection from './components/reuse/SuccessStorySection'
import MarketingHero from './components/ui/MarketingHero'
import BoostYourWebsite from './components/ui/BoostYourWebsite'
import ReversePsychologyCTA from './components/ui/ReversePsychologyCTA'




function App() {
 

  return (
   <main>
    
    
<Hero/>
{/* <LogoList/> */}
<Whywe/>
{/* <Content_section title1={"Boost Your Website’s"} title2={"Visibility with the"} title3={"Best Digital Marketing Centre in Guwahati!"} desc={"Is your website invisible like “Mr. India”? Don’t worry! Our expert team will ensure your website reaches the right audience, increasing visibility and driving organic traffic. As the best digital marketing centre in Guwahati, we specialize in SEO, social media marketing, and result-driven strategies to help your business grow online. Get ready to shine on the digital map! 🚀 "} btn1={"Enquiry Now"} btn2={"Get Free Consultation"} bg={""} img={"/images/rocket2.webp"} /> */}
<BoostYourWebsite/>
<div className='flex justify-center'>
<Card_section/>
</div>
<Para_card main_bg={'bg-gradient-to-tr from-card-primary-300 to-card-primary-100'} btn_color={'bg-black font-semibold hover:bg-zinc-700 cursor-pointer'} />
<Content/>
<ReversePsychologyCTA/>

<Content_section title1={"Best Digital Marketing"} title2={"& Advertising Services"} title3={"for Business Growth"} desc={"Are you looking for a top-rated digital marketing agency in Guwahati that delivers real results? We are a trusted award-winning agency, recognized by Sortlist for our excellence in digital marketing. Our expert team specializes in SEO, social media marketing, PPC, content marketing, and branding to help businesses grow online."} bg={""} img={"/images/ads.webp"} btn1={"📞 Get a Free Consultation Today"} btn2={"Contact us"} />
<SuccessStorySection/>
<MarketingHero/>
<RecentProjects/>
<Our_approach/>
<TrustedBySection/>

<Price_card/>
<Testimonials/>
<Our_team_comp/>
<Faq_section/>
<Contact_form/>

   </main>
  )
}

export default App
