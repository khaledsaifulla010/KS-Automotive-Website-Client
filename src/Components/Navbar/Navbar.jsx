import { Link } from 'react-router-dom';
import companyLogo from '../../assets/image/1.Company-Logo.jpg'

const Navbar = () => {
    return (
        <div className='m-8'>
            <div className="navbar bg-slate-100 h-28 rounded-xl">
                <div className="navbar-start">
                    <div className='gap-4 flex items-center'>
                        <img className='lg:w-16 rounded-xl lg:h-10' src={companyLogo} alt="" />
                        <h2 className='lg:text-3xl font-bold'>KS AUTOMOTIVE LIMITED</h2>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-4">
                        <Link className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-lg text-white ' to={'/'}><li><a>Home</a></li></Link>
                        <Link className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg font-bold text-lg text-white' to={'addProduct'}><li><a>Add Products</a></li></Link>
                        <Link className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-lg text-white ' to={'myCart'}><li><a>My Cart</a></li></Link>
                        <Link className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg font-bold text-lg text-white' to={'logIn'}><li><a>Login/Register</a></li></Link>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;