import ProfilePicture from '../assets/img.jpg';
const Hero = () => {
  return (
    <div className="container bg-black m-auto text-white flex">
      <img src={ProfilePicture} className="rounded-3xl h-1/3 w-1/3 flex align-middle justify-center" />
        <h2 className=''>Hi, I am Rojish Ranjit.</h2>
        <br />
        <h3>I am a front end web developer</h3>
    </div>
  )
}

export default Hero