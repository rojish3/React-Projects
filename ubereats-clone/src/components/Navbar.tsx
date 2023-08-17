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
        {/* <div className={`overlay absolute w-screen h-screen z-10 ${sidebar ? 'bg-[rgba(255, 99, 71, 0.2)]' : ' '}`}></div> */}
        {/* onClick={() => setSidebar(!sidebar)}  */}

        <nav className={`w-full flex justify-between items-center h-16 px-4 py-8 lg:px-10 lg:h-24 fixed top-0 z-20 ${changeBg} ${shadow}`}>
            <div className='left-container items-center flex gap-4 text-xl lg:gap-6'>
                <AiOutlineMenu className="text-2xl cursor-pointer" onClick={() => setSidebar(true)} />
                <h2 className='text-2xl lg:text-3xl cursor-pointer'>Uber <b>Eats</b></h2>
            </div>
            <div className='right-container flex gap-4 lg:gap-6'>
                <div 
                  className='login' 
                  value='Log in'
                  onClick={(e) => {
                    setLabel(e.target.value) 
                    setShowModal(true)
                  }} >
                <Button 
                  bg='bg-white'
                  color='text-black'
                  rounded='rounded-full'
                  label="Log in"
                  />
                </div>

                <div 
                  className='signup'
                  value='Sign Up'
                  onClick={(e) => {
                    setLabel(e.target.value) 
                    setShowModal(true)
                  }}>
                <Button 
                  bg='bg-black'
                  color='text-white'
                  rounded='rounded-full'
                  label="Sign Up"
                />
                </div>

            </div>
        </nav>
        <Modal showModal={showModal} label={label} setShowModal={setShowModal} />
        {/* {
          showModal ? (
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 h-40 w-80 bg-white flex flex-col p-4 shadow rounded-lg'>
              <div className='flex justify-end cursor-pointer'>
              <GrClose onClick={() =>setShowModal(false)} />
              </div>
              <div className='flex h-full justify-center items-center'>
                {label} Clicked
              </div>
            </div>
          ) : null
        } */}


        <div className={`sidebar fixed bg-white top-0 left-0 w-72 h-full z-50 p-6 flex flex-col gap-4 justify-between ${sidebar ? 'block' : 'hidden'}`}>
          <GrClose className='absolute right-1 top-1' onClick={() => setSidebar(false)}/>
          <div className=' flex flex-col gap-4'>
            <Button 
              bg='bg-black'
              color='text-white'
              rounded='rounded-md'
              label="Sign Up"
              />
            <Button 
              bg='bg-gray-200'
              color='text-black'
              rounded='rounded-md'
              label="Log in" 
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
            label='iPhone'
            />
          <Button 
            bg='bg-gray-200'
            color='text-black'
            rounded='rounded-full'
            label='Android'
            />
          </div>
          </div>
        </div>
    </>
  )
}

export default Navbar