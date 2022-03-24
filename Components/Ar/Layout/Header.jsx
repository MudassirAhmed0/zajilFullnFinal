import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../../assets/NewImages/svg/arrow.svg'
import logo from '../../../assets/NewImages/svg/logo.svg'
import hamburger from '../../../assets/NewImages/svg/hamburger.svg'
import close from '../../../assets/NewImages/svg/close.svg'
import arabic from '../../../assets/NewImages/svg/arabic.svg'
import styles from '../../../arStyles/Layout.module.css'
import MobileNumber from '../Popups/MobileNumber'
import MenuBar from './MenuBar'
import {useState} from 'react'

const Header = ({noShipment}) => {
    const [icon,setIcon] = useState(hamburger)
    const  openMenuBar =()=>{
        if(document.getElementById('menubar').classList.contains(styles.active)){
            document.getElementById('menubar').classList.remove(styles.active)
            document.getElementById('header').classList.remove(styles.active)
            setIcon(hamburger)
        }else{
            document.getElementById('menubar').classList.add(styles.active)
            document.getElementById('header').classList.add(styles.active)
            setIcon(close)
            
        }

    }

    const manageShipment =()=>{
         const modal = document.getElementById('mobileNumber')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
        document.getElementById('menubar').classList.remove(styles.active)
            document.getElementById('header').classList.remove(styles.active)
            setIcon(hamburger)
    }
  return (
      <>
    <header id='header' className={' z-50 popup container  flex items-center  text-lg  text-white absolute   left-1/2 transform -translate-x-1/2  top-4 '}>
        <div>
            <Link href='/'>
                 <a>
                    <Image src={logo} alt="zajil-logo"/>
                </a>
            </Link>
        </div>
        <nav className=" hidden lg:block">
            <ul className='flex mr-20 gap-x-10'>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative hover:text-yellow transition-all'>Ship   <span className='relative -top-0.5 -left-0.3'><Image   src={arrow} alt="arrow"/></span></span>
                    <ul className={`absolute top-7 -right-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/shipment">
                                <a>
                                    Create Shipment
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/manage-shipments">
                                <a>
                                    Manage Shipments
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/get-pricing">
                                <a>
                                    Get Price Estimate
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/branches">
                                <a>
                                    Find Nearest Branch
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative hover:text-yellow transition-all'>Solutions  <span className='relative -top-0.5 -left-0.3'><Image   src={arrow} alt="arrow"/></span></span>
                    <ul className={`absolute top-7 -right-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/ecommerce">
                                <a>
                                    E-commerce
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/freight">
                                <a>
                                    Freight
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/fulfilment">
                                <a>
                                    Fulfilment
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/ksadistribution">
                                <a>
                                    Domestic Distribution
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative hover:text-yellow transition-all'>Help & Support  <span className='relative -top-0.5 -left-0.3'><Image   src={arrow} alt="arrow"/></span></span>
                    <ul className={`absolute top-7 -right-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/faqs">
                                <a>
                                    FAQs
                                </a>
                            </Link>
                        </li>
                        <li className={`hover:text-yellow transition-all ${styles.dropdownMenuItem}`}>
                            <Link href="/contact">
                                <a>
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                    </ul> 
                </li>
             {noShipment  ||   <li className={`cursor-pointer relative`}>
                    <Link href='/track'>
                         <a className='relative hover:text-yellow transition-all'>Track Your Shipment  </a>
                    </Link>
                
                </li>}
            </ul>
        </nav>
        <ul className='mr-auto  items-center hidden lg:flex'>
            <li className='ml-12'>
                <Link href="#">
                    <a >
                    العربية    
                    </a>
                </Link>
            </li>
            <li className={`hover:bg-blue hover:text-white transition-all ${styles.btn}`}>
                <button  onClick={manageShipment}>
                        Manage Shipment
                </button>
            </li>
        </ul>
        <ul className='flex lg:hidden mr-auto items-center'>
            <li className='mr-4'>
                <Image src={arabic} alt='Arabic'/>
            </li>
            <li className={`cursor-pointer ${styles.hamburgerIcon}`} onClick={openMenuBar}>
                <Image  width={40}src={icon} alt='hamburger '/> 
            </li>
            
        </ul>
    </header>
    <MenuBar manageShipment={manageShipment}/>
    <MobileNumber />
    </>
  )
}

export default Header