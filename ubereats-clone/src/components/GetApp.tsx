import logo from '../assets/uber-eats.png';
import { BsAndroid2 } from 'react-icons/bs';
const GetApp = () => {
  return (
    <div className="bg-white flex flex-col my-8 px-4 gap-2 lg:hidden">
        <div className="flex flex-row gap-3">
            <img src={logo} alt="uber logo" />
            <p className='text-lg font-bold'>There's more to love in the Android app.</p>
        </div>
        <button className='bg-gray-200 flex justify-center items-center px-4 py-2 rounded-md gap-2'><BsAndroid2 />Get the app</button>
    </div>
  )
}

export default GetApp