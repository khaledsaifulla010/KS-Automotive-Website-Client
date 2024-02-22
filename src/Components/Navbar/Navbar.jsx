import { Link } from 'react-router-dom';
import companyLogo from '../../assets/image/1.Company-Logo.jpg'
import moment from 'moment';


const Navbar = () => {
    const date = moment().format('Do MMMM  YYYY');
    const time = moment().format('LTS');

    return (
        <div className='m-8' >
            <div className="navbar gap-x-36 ">
                <div className="">
                    <div className='grid mt-4'>
                        <div className='gap-4 flex items-center'>
                            <img className='lg:w-16 rounded-xl lg:h-10' src={companyLogo} alt="" />
                            <h2 className='lg:text-3xl font-bold'>KS AUTOMOTIVE LIMITED</h2>

                        </div>
                        <div className='flex items-center gap-4 mt-2 font-bold'>
                            <h2>Time: {time} </h2>
                            <h2>Date: {date} </h2>
                        </div>
                    </div>

                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-6">
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