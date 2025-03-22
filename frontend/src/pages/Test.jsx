import React from 'react'
import TextCardSection from '../components/TextCard/TextCardSection'
import AnimatedCardSection from '../components/AnimatedCard/AnimatedCardSection'
import PropertyFeatures from '../components/PropertyFeatures'
import Accordion from '../components/Accordion'
import PropertyCards from '../components/PropertyCards'
import GraphCard from '../components/GraphCard'
 
const Test = () => {
  return (
    <div>
      <TextCardSection/>
      <AnimatedCardSection/>
      <PropertyFeatures/>
      <Accordion/>
      <PropertyCards/>
      <GraphCard/>
    </div>
  )
}

export default Test
