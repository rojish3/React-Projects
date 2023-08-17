import Navbar from "./Navbar";
import { HiLocationMarker } from "react-icons/hi";
import { PiClockFill } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="hero bg-center bg-no-repeat background h-screen">
      <Navbar />
        <div className="relative h-full flex flex-col gap-2 items-center px-8 mx-auto pt-20 w-full lg:h-full lg:px-12 lg:items-start lg:justify-center ">
          <h2 className="text-[6.5vw] font-bold mb-4 lg:text-5xl">
            Order food to your door
          </h2>
          {/* <input className="px-10 py-2 mt-1 w-full" type="text" placeholder="Enter delivery adderss"></input> */}
          <div className="flex flex-col gap-2 items-center mx-auto w-full lg:flex-row">
            
            <div className="bg-white w-full px-4 py-4 flex items-center gap-2 lg:w-[35%] lg:text-lg lg:px-6 lg:py-4">
              <HiLocationMarker /><input type="text" placeholder="Enter delivery adderss" className="w-full outline-none active:outline-none" />
              
            </div>
            <button className="bg-white w-full px-4 py-4 flex items-center gap-2 lg:w-[18%] lg:text-lg lg:px-5 lg:py-4">
              <PiClockFill />
              Deliver now
            </button>
            {/*<div className="w-full">
             <Button
              bg='bg-black'
              color='text-white'
              rounded='rounded-md'
              label='Find Food'
              />
            </div> */}
            <button className="bg-black text-white font-bold w-full px-2 py-4 flex items-center justify-center gap-2 rounded-md lg:w-[10%] lg:text-lg lg:px-0 lg:py-4">
              Find Food
            </button>
          </div>

          <span className="text-left">
            <a className="underline" href="#">
              Sign In
            </a>{" "}
            for your recent address
          </span>
          {/* <img className="absolute -bottom-96 -right-40" src="https://www.pngmart.com/files/15/Food-Plate-Top-View-Nutrition-PNG.png"></img> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
