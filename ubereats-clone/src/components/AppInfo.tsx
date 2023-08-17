import AppstoreImg from '../assets/app-store.png';
import PlaystoreImg from '../assets/play-store.png';
import { IoLanguage } from 'react-icons/io5';

const AppInfo = () => {
  return (
    <div className="px-4 my-8 grid gap-y-10 lg:px-12 lg:grid-cols-2">
        <div className='flex flex-col gap-2 lg:justify-between lg:align-middle'>
          <h1 className="text-4xl">Uber <b>Eats</b></h1>
          <div className='flex flex-row space-x-5'>
              <img className='w-40' src={AppstoreImg} />
              <img className='w-40' src={PlaystoreImg} />
          </div>
        </div>
        <div className='grid gap-y-4 lg:grid lg:grid-cols-2'>
            <ul className='leading-8 lg:leading-[3rem]'>
                <li>Get Help</li>
                <li>Buy gift cards</li>
                <li>Add your restaurant</li>
                <li>Sign up to deliver</li>
                <li>Create a business account</li>
                <li>Promotions</li>
            </ul>
            <ul className='leading-8 lg:leading-[3rem]'>
                <li>Restaurants near me</li>
                <li>View all cities</li>
                <li>Pickup near me</li>
                <li>About Uber Eate</li>
                <li className='flex items-center'><IoLanguage />&nbsp;English</li>
            </ul>
        </div>
    </div>
  )
}

export default AppInfo