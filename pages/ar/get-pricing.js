
import PricingCard from '../../Components/Ar/Pricing/PricingCard'
import HeroCardLayout from '../../Components/Ar/Shipment/HeroCardLayout'
import Head from 'next/head'
import { useEffect } from 'react'

const GetPricing = () => {
  useEffect(()=>{
    document.querySelector('body').style.direction = 'rtl'
  },[])

  return (
    <>
      <Head>
        <title>Get Pricing || Zajil</title>
        <meta name="description" content="" />

      </Head>
      <HeroCardLayout>
        <PricingCard />
      </HeroCardLayout>
    </>

  )
}

export default GetPricing