import React from 'react'
import { Heading1, MainPera, SubHeading } from '../style component/StyeldComponent'
import HomeBanner from '../HomeComponents/HomeBanner'
import FirstCardComponent from '../HomeComponents/FirstCardComponent'
import SecondCardComponent from '../HomeComponents/SecondCardComponent'
import PopularLocalities from '../HomeComponents/PopularLocalities'

export default function HomePage() {
  return (
    <div>
   <HomeBanner/>
   <FirstCardComponent/>
   <SecondCardComponent/>
   <PopularLocalities/>
      </div>
  )
}
