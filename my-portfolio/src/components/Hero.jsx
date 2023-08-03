import ProfilePicture from '../assets/img.jpg';
const Hero = () => {
  return (
    <>
    <div className="container flex">
      <img src={ProfilePicture} className="h-72 w-72 p-10 rounded-full flex align-middle justify-center" />

          <h2 className='w-full font-mono text-4xl'>Hi, I am Rojish Ranjit.</h2>

          {/* <p className='w-full'>I am a front end web developer</p> */}

    </div>
    </>

  )
}

export default Hero