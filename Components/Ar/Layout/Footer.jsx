import styles from '../../../arStyles/Layout.module.css'
import logo from '../../../assets/NewImages/svg/logofooter.svg'
import Image from 'next/image'
import Link from 'next/link'
import playStoreIcon from '../../../assets/NewImages/png-files/playstoreWhite.png'
import appStoreIcon from '../../../assets/NewImages/png-files/appstoreWhite.png'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <footer className={`pt-12 ${styles.footerFluid}`}>
      <div className={styles.footer}>
        <div className="flex w-full flex-wrap gap-y-10">
          <Link href="/" >
            <a className={`md:w-1/6 w-full ${styles.footerLogo}`}>
              <Image src={logo} alt="Zajil Logo" />
            </a>
          </Link>
          <ul className='medium-font text-white flex flex-col gap-y-4 lg:w-1/6  md:ml-auto  lg:ml-0 md:w-3/12 w-1/2'>
            <li>
              <Link href='/about'>
                <a>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/mediacenter'>
                <a>
                  Media Center
                </a>
              </Link>
            </li>
            <li>
              <Link href='/theapp'>
                <a>
                  Mobile App
                </a>
              </Link>
            </li>
          </ul>
          <ul className='medium-font text-white flex flex-col gap-y-4 lg:w-1/6  md:w-3/12 text-left md:text-right w-1/2'>
            <li>
              <Link href='/contact'>
                <a>
                  Contact Us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/career'>
                <a>
                  Careers
                </a>
              </Link>
            </li>
            <li>
              <Link href='/developertools'>
                <a>
                  Developers Tools
                </a>
              </Link>
            </li>
          </ul>
          <ul className='medium-font text-white flex flex-col gap-y-4 lg:w-1/6  md:w-3/12 w-1/2'>
            <li>
              <Link href='/terms'>
                <a>
                  Terms of Use
                </a>
              </Link>
            </li>
            <li>
              <Link href='/privacy-policy'>
                <a>
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href='/faqs'>
                <a>
                  FAQs
                </a>
              </Link>
            </li>
          </ul>
          <div className=' w-1/2 flex-col gap-y-[22px]  items-end gap-x-5 flex md:hidden '>
            <Image src={appStoreIcon} alt='App Store Icon' />
            <Image src={playStoreIcon} alt='Play Store Icon' />
          </div>
          <div className="grow mb-4 md:mb-0 flex flex-col justify-center">
            <Newsletter />
          </div>
        </div>
      </div>
      <div className={styles.footerDivider}>

      </div>
      <div className={`flex justify-between  items-center text-white md:pb-4 pb-12 text-sm ${styles.footer}`}>
        <div className='flex gap-x-14 gap-y-4 mt-1.5 md:mt-0 flex-col md:flex-row  text-center md:text-left w-full '>
          <span>
            © 2021 Zajil Express. All rights reserved.
          </span>
          <span>
            Developed by Brackets Technology
          </span>
        </div>
        <div className=' items-center gap-x-5 hidden md:flex '>
          <Image src={appStoreIcon} alt='App Store Icon' />
          <Image src={playStoreIcon} alt='Play Store Icon' />
        </div>

      </div>
    </footer>
  )
}

export default Footer