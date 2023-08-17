import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="px-4 my-4 mb-16 lg:px-12 lg:mb-24">
      <div className='lg:flex flex-row justify-between items-center'>
        <div className="socials text-xl flex gap-3 py-4 lg">
        <AiFillFacebook />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        </div>
        <div className='policy flex flex-col gap-4 lg:flex-row lg:gap-8'>
          <a href='#' className='hover:underline'>Privacy Policy</a>
          <a href='#' className='hover:underline'>Terms</a>
          <a href='#' className='hover:underline'>Pricing</a>
          <a href='#' className='hover:underline'>Do not sell of share my personal information</a>
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row lg:justify-end lg:gap-8'>
        <p>This site is protected by reCAPTCHA and the Google <a href='#' className='hover:underline'>Privacy Policy</a> and <a href='#' className='hover:underline'>Terms of Service</a> apply.</p>
        <p>&copy; 2023 Uber Technology Inc.</p>
      </div>

    </div>
  )
}

export default Footer;