import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-300 shadow-lg justify-between items-center p-4 text-xl font-bold">
            <h1 className='cursor-pointer' onClick={() => navigate('/')}>Books.com</h1>
            <ul className="flex gap-8 items-center">
                <NavLink 
                  to="/" 
                  style={({ isActive}) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  ><li className='hover:text-blue-700'>Home</li></NavLink>
                <NavLink 
                  to="/books"
                  style={({ isActive}) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  ><li className='hover:text-blue-700'>Books</li></NavLink>
                  <NavLink 
                  to="/page"
                  style={({ isActive}) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  ><li className='hover:text-blue-700'>Page</li></NavLink>
                  <NavLink 
                  to="/signup"
                  style={({ isActive}) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  ><li className='bg-blue-700 text-white font-bold px-4 py-2 rounded-full hover:scale-105'>Sign Up</li></NavLink>
            </ul>
        
    </div>
  )
}

export default Navbar