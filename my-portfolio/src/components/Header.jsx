import logo from '../assets/logo.png'
const Header = () => {
  return (
    <>
        <div className="header flex justify-between items-center p-4 bg-gray-400">
            <div className="logo flex h-10 m-3">
                <img src={logo} alt="logo" />
            </div>
            <div className='nav hidden md:flex space-x-8 p-3 text-xl cursor-pointer'>
                <div className='item'>Skills</div>
                <div className='item'>Projects</div>
                <div className='item'>Contact</div>
                <div className='profile'>
                    <button className='buttons__toggle'>
                        <i className='fa fa-user'></i>
                    </button>
                </div>
            </div>

            <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                <div className="line h-0.5 w-6 my-1 bg-black"></div>
                <div className="line h-0.5 w-6 my-1 bg-black"></div>
                <div className="line h-0.5 w-6 my-1 bg-black"></div>
            </div>
        </div>
    </>
  );
};

export default Header;
