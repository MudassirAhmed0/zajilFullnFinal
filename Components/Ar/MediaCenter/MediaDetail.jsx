import Image from 'next/image'
import Link from 'next/link'
import home from '../../../arStyles2/Home.module.css'
import arrow from '../../../assets/NewImages/svg/right-arrow.svg'
import styles from '../../../arStyles2/media.module.css'
import YellowBox from '../../../assets/NewImages/svg/box-yellow.svg'
import chacha from '../../../assets/NewImages/media-center/image/Featured-News.jpg'
import arrow2 from '../../../assets/NewImages/svg/arrow-black.svg'
import commitment2business from '../../../assets/NewImages/media-center/image/commitment-to-business.jpg'
import AnnounceMajorInvestment from '../../../assets/NewImages/media-center/image/major-investment.jpg'
import commitmenttobusiness from '../../../assets/NewImages/media-center/image/commitment-to-businees.jpg'
import globalCapacity from '../../../assets/NewImages/media-center/image/simplify-use-experince.jpg'


const MediaDetail = () => {
    return (
        <div className='max-1394 mx-auto xl:pt-16 xl:px-20 xl:pb-24 py-14 pl-[18px] pr-[18px]'>
            <div>
                <span>
                    <Image src={YellowBox} alt="Yellow Box" />
                </span>
                <h2 className='text-blue medium-font text-3xl'>Featured News</h2>
            </div>
            <div className='flex lg:flex-nowrap flex-wrap gap-x-10 items-center mt-3'>
               
                    <span className={`rounded-lg relative overflow-hidden img_container ${styles.chachaStyles}`}>
                        <Image src={chacha} alt="Business Commitment" />
                    </span>
              
                <div className={styles.contentew}>
                    <p className='text-xs text-grey medium-font lg:mt-0 mt-[34.5px]'>8 June 2020</p>
                    <p className='text-base text-grey light-font mt-2'>eport of the classification index of postal and logistics companies issued by CITC which monitors the number of raised complaints in the second quarter of 2020 , Zajil Company comes as the best company in the international shipments sector.</p>
                    <p className='text-base text-grey light-font mt-4'>Zajil CARE, a commitment to business values that highlight KSA competitive…</p>
                    <div className='flex items-center cursor-pointer  mt-4'>
                        <p className='text-base text-grey pt-1.5 pl-2'>Read More</p>
                        <span className={`${styles.rotateIcon}`}>
                            <Image src={arrow} alt="arrow" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <span>
                    <Image src={YellowBox} alt="Yellow Box" />
                </span>
                <h2 className='text-blue medium-font text-3xl'>Latest Updates</h2>
            </div>
            <div className='flex gap-x-8 mt-4'>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={commitment2business} alt='Commitment to Business' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow} ${styles.rotateIcon2}  mr-1` }>
                                    <Image src={arrow2} alt="arrow"/>

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={AnnounceMajorInvestment} alt='Major Investment' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow} ${styles.rotateIcon2} mr-1` }>
                                    <Image src={arrow2} alt="arrow"/>

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={commitmenttobusiness} alt='Business Commitment' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow} ${styles.rotateIcon2}  mr-1` }>
                                    <Image src={arrow2} alt="arrow"/>

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${home.carouselCard} ${styles.mycard}`}>
                    <div className={`${home.carouselCardImg} rounded-t-md`}>
                        <Image src={globalCapacity} alt='Global Capacity' />
                    </div>
                    <div className='pt-4 pb-4 pl-4 pr-4 flex flex-col'>
                        <span className="text-xs text-grey">
                            8 June 2020
                        </span>
                        <span className="mt-3 text-grey light-text">
                            Zajil CARE, a commitment to business values that highlight KSA competitive…
                        </span>
                        <Link href="#">
                            <a className='relative mt-2.5 flex' >
                                <span className='mt-1'>Read More</span>
                                <span className={`${styles.arrow} ${styles.rotateIcon2}  mr-1` }>
                                    <Image src={arrow2} alt="arrow"/>

                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaDetail