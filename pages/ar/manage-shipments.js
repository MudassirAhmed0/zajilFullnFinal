import Head from 'next/head' 
import { useEffect } from 'react'
import ManageCard from '../../Components/Ar/ManageShipments/ManageCard'
import CancelShipment from '../../Components/Ar/Popups/CancelShipment'
import HeroCardLayout from '../../Components/Ar/Shipment/HeroCardLayout'

const ManageShipments = () => {
  useEffect(()=>{
    document.querySelector('body').style.direction = 'rtl'
  },[])
   
  return (
    <>
    <Head>
        <title>Manage Shipments || Zajil</title>
        <meta name="description" content="" />
        
    </Head>    
    <HeroCardLayout>
          <ManageCard/>
    </HeroCardLayout>
    
    <CancelShipment/>

 </>
  )
}

export default ManageShipments