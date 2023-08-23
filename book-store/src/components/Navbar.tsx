import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-200 shadow-lg justify-between p-4 text-xl font-bold">
            <h1 className='cursor-pointer' onClick={() => navigate('/')}>Books.com</h1>
            <ul className="flex gap-8">
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
                  to="/form"
                  style={({ isActive}) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  ><li className='hover:text-blue-700'>Form</li></NavLink>
                  <NavLink 
                  to="/login"
                  style={({ isActive}) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  ><li className='hover:text-blue-700'>Login</li></NavLink>
            </ul>
        
    </div>
  )
}

export default Navbar