import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='bg-gray-800 py-8 px-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#'>
                        <img src={logo} alt='logo'></img>
                    </a>
                    <button className='btn btn-sm'>Work with me</button>
                </div>

            </div>
        </div>
    )
}

export default Header
