import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import logo from '../assets/uber-eats.png';
import Button from './Button';
import { useState } from 'react';
import Modal from './Modal';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [changeBg, setChangeBg] = useState("");
  const [shadow, setShadow] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [label, setLabel] = useState("");

  window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      setChangeBg('bg-white');
      setShadow('shadow');
    } else {
      setChangeBg('');
      setShadow('');
    }
  })

  return (
    <>
        <nav className={`w-full flex justify-between items-center h-16 px-4 py-8 lg:px-10 lg:h-24 fixed top-0 z-20 transition-all duration-300 ease-in-out ${changeBg} ${shadow}`}>
            <div className='left-container items-center flex gap-4 text-xl lg:gap-6'>
                <AiOutlineMenu className="text-2xl cursor-pointer" onClick={() => setSidebar(true)} />
                <h2 className='text-2xl lg:text-3xl cursor-pointer'>Uber <b>Eats</b></h2>
            </div>
            <div className='right-container flex gap-4 lg:gap-6'>
                <div 
                  className='login' 
                  onClick={() => {
                    setLabel("Log in") 
                    setShowModal(true)
                  }} >
                <Button 
                  bg='bg-white'
                  color='text-black'
                  rounded='rounded-full'
                  value="Log in"
                  />
                </div>

                <div 
                  className='signup'
                  onClick={() => {
                    setLabel("Sign Up")
                    setShowModal(true)
                  }}>
                <Button 
                  bg='bg-black'
                  color='text-white'
                  rounded='rounded-full'
                  value="Sign Up"
                />
                </div>

            </div>
        </nav>
        <Modal showModal={showModal} label={label} setShowModal={setShowModal} />

        <div className={`sidebar fixed bg-white top-0 left-0 w-72 h-full z-50 p-6 flex flex-col gap-4 justify-between ${sidebar ? 'block' : 'hidden'}`}>
          <GrClose className='absolute right-1 top-1' onClick={() => setSidebar(false)}/>
          <div className=' flex flex-col gap-4'>
            <Button 
              bg='bg-black'
              color='text-white'
              rounded='rounded-md'
              value="Sign Up"
              />
            <Button 
              bg='bg-gray-200'
              color='text-black'
              rounded='rounded-md'
              value="Log in" 
              />
            <a>Create a business account</a>
            <a>Add your restaurant</a>
            <a>Sign up to deliver</a>
          </div>
          <div>
          <div className='flex justify-center items-center gap-2 my-2'>
            <img src={logo} alt='logo' className='w-16' />
            <p className='font-bold'>There's more to love in app.</p>
          </div>
          <div className='flex gap-2'>

          <Button
            bg='bg-gray-200'
            color='text-black'
            rounded='rounded-full'
            value='iPhone'
            />
          <Button 
            bg='bg-gray-200'
            color='text-black'
            rounded='rounded-full'
            value='Android'
            />
          </div>
          </div>
        </div>
    </>
  )
}

export default Navbar