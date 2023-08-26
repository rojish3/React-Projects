import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Slide from 'react-reveal/Slide';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="overlay">
        <div className="flex flex-col m-auto h-full w-full justify-center items-center">
          <Slide down>
          <h2 className="text-3xl uppercase text-orange-500">Best Choice</h2>
          </Slide>
          <Slide right>
          <p className="text-9xl uppercase font-bold text-white">Books</p>
          </Slide>
          <Slide left>
          <p className="text-9xl uppercase font-bold text-white">for all</p>
          </Slide>
          <Slide up>
          <button 
            onClick={() => navigate('/books')} 
            className='flex justify-center items-center gap-4 bg-blue-700 px-4 py-2 rounded-lg text-white mt-8 hover:scale-105'
            >
            Browse Books <AiOutlineArrowRight />
          </button>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default Home;