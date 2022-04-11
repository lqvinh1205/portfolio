import React, { useEffect, useState } from 'react'
import WhatIDo from '../../components/WhatIDo/WhatIDo'
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject'
import FooterClient from '../../components/FooterClient/FooterClient'
import HeaderClient from '../../components/HeaderClient/HeaderClient'
import { read } from '../../api/myInfo'

const AboutMe = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const getInfo = async () => {
      const { data } = await read("624fb6379fa6247e6084f51c");
      setInfo(data);
    };
    getInfo()
  }, []);
  return (
    <div>
        <HeaderClient info={info}/>
        <WhatIDo info={info}/>
        <FeaturedProject />
        <FooterClient />
    </div>
  )
}

export default AboutMe