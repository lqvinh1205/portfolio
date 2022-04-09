import React from 'react'
import WhatIDo from '../../components/FeaturedProject/WhatIDo/WhatIDo'
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject'
import FooterClient from '../../components/FooterClient/FooterClient'
import HeaderClient from '../../components/HeaderClient/HeaderClient'

const AboutMe = () => {
  return (
    <div>
        <HeaderClient />
        <WhatIDo />
        <FeaturedProject />
        <FooterClient />
    </div>
  )
}

export default AboutMe