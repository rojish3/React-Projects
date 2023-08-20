import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex bg-green-500 justify-between p-4 text-xl">
            <h1>Books.com</h1>
            <ul className="flex gap-4">
                <NavLink 
                  to="/" 
                  className="active:text-red-500"
                  >Home</NavLink>
                <NavLink 
                  to="/books"
                  className="active:text-red-500"
                  >Books</NavLink>
            </ul>
        
    </div>
  )
}

export default Navbar