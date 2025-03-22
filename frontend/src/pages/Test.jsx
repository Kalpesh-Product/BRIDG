import React from 'react'
import TextCardSection from '../components/TextCard/TextCardSection'
import AnimatedCardSection from '../components/AnimatedCard/AnimatedCardSection'
import PropertyFeatures from '../components/PropertyFeatures'
import Accordion from '../components/Accordion'
import PropertyCards from '../components/PropertyCards'

const Test = () => {
  return (
    <div>
      <TextCardSection/>
      <AnimatedCardSection/>
      <PropertyFeatures/>
      <Accordion/>
      <PropertyCards/>
    </div>
  )
}

export default Test
