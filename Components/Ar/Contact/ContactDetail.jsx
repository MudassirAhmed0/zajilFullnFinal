import Image from 'next/image'
import yelllowBox from '../../../assets/NewImages/svg/box-yellow.svg'
import call from '../../../assets/NewImages/svg/call.svg'
import mail from '../../../assets/NewImages/svg/mail.svg'
import location from '../../../assets/NewImages/svg/location.svg'
import styles from '../../../arStyles2/contact.module.css'
import layoutStyles from '../../../arStyles2/Layout.module.css'
import { useState } from 'react'
import MobileInput from '../../Popups/MobileInput'


const ContactDetail = () => {
    const [state, setState] = useState({
        email: '',
        fullName: '',
        country: '',
        jobTitle: '',
        mobileNumber: '',
        subject: '',
        message: ''
    })
    const [emailError, setEmailError] = useState(false)
    const [fullNameError, setFullNameError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    const [jobTitleError, setJobTitleError] = useState(false)
    const [subjectError, setSubjectError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [mobileNumberError, setMobileNumberError] = useState(false)
    const handleChange = (e) => {
        setState(() => {
            return {
                ...state,
                [e.target.id]: e.target.value
            }
        })
    }
    const handleSubmit = () => {
        const { email, fullName, country, jobTitle, mobileNumber, subject, message } = state
        setEmailError(email == '')
        setFullNameError(fullName == '')
        setCountryError(country == '')
        setJobTitleError(jobTitle == '')
        setSubjectError(subject == '')
        setMobileNumberError(mobileNumber == '')
        setMessageError(message == '')
        if (email && fullName && country && jobTitle && mobileNumber && subject && message) {
            alert("Form Submitted")
        }
        setTimeout(() => {
            setEmailError(false)
            setFullNameError(false)
            setCountryError(false)
            setJobTitleError(false)
            setSubjectError(false)
            setMobileNumberError(false)
            setMessageError(false)
        }, 5000)
    }
    return (
        <div className='flex max-1394 mx-auto md:flex-nowrap flex-wrap gap-x-28 lg:pl-24 lg:pr-8 lg:py-20 px-[18px] py-[52px] '>
            <div className={styles.reachside}>
                <div>
                    <span>
                        <Image src={yelllowBox} alt="Yellow Box" />
                    </span>
                    <h2 className='text-3xl medium-font text-grey'>Reach Us</h2>
                    <p className='text-lg light-font mt-2 text-grey'>Find the location and contact information you need to keep your <br /> shipping experience simple.</p>
                </div>
                <div className='lg:mt-28 mt-[20px] '>
                    <div className='flex items-center gap-x-5'>
                        <span>
                            <Image src={call} alt="Call" />
                        </span>
                        <div>
                            <h4 className='text-xl medium-font text-grey'>Call</h4>
                            <p className='text-lg light-font text-grey'>+966 920000177</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-5 mt-9'>
                        <span>
                            <Image src={mail} alt="mail" />
                        </span>
                        <div>
                            <h4 className='text-xl medium-font text-grey'>Email</h4>
                            <p className='text-lg light-font text-grey'>info@zajil-express.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-5 mt-9'>
                        <span>
                            <Image src={location} alt="Location" />
                        </span>
                        <div>
                            <h4 className='text-xl medium-font text-grey'>Location</h4>
                            <p className='text-lg light-font text-grey'>Find Nearest Branch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:mt-0 mt-[54px] ${styles.getside}`}>
                <span>
                    <Image src={yelllowBox} alt="Yellow Box" />
                </span>
                <h2 className='text-3xl medium-font  text-grey'>Get on Touch</h2>

                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`} >
                    <input onChange={handleChange} type="text" placeholder='Full Name' name='fullName' id='fullName' />
                    <label htmlFor="fullName">Full Name</label>
                    {fullNameError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                    <input onChange={handleChange} type="email" placeholder='Email' name='email' id='email' />
                    <label htmlFor="email">Email</label>
                    {emailError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                    <input onChange={handleChange} type="text" placeholder='Country' name='country' id='country' />
                    <label htmlFor="country">Country</label>
                    {countryError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                    <input onChange={handleChange} type="text" placeholder='Job Title' name='JobTitle' id='JobTitle' />
                    <label htmlFor="JobTitle">Job Title</label>
                    {jobTitleError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                    {/* <input onChange={handleChange} type="phone" placeholder='Mobile Number' name='mobilenumber' id='mobilenumber' /> */}
                    <MobileInput onChange={handleChange} id='mobilenumber' />
                    <label htmlFor="mobilenumber">Mobile Number</label>
                    {mobileNumberError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                    <input onChange={handleChange} type="text" placeholder='Subject' name='subject' id='subject' />
                    <label htmlFor="subject">Subject</label>
                    {subjectError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <div className={`mt-7 relative  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track} `}>
                    <input onChange={handleChange} type="text" placeholder='Message' name='message' id='message' />
                    <label htmlFor="message">Message</label>
                    {messageError && <span className="text-red-500">This  field is Required.</span>}
                </div>
                <button onClick={handleSubmit} className='lg:mt-12 mt-9 w-36 h-10 flex justify-center rounded items-center border-2  border-yellow medium-font  hover:bg-yellow hover:text-grey'>
                    Submit
                </button>

            </div>
        </div>
    )
}

export default ContactDetail