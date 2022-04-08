import React from 'react'
import WhatIDo from '../../components/admin/WhatIDo/WhatIDo'
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject'
import HeaderClient from '../../components/HeaderClient/HeaderClient'

const AboutMe = () => {
  return (
    <div>
        <HeaderClient />
        <WhatIDo />
        <FeaturedProject />
    </div>
  )
}

export default AboutMe