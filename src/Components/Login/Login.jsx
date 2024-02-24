import { Link } from 'react-router-dom';
import google from '../../assets/image/2.Google.png'
const Login = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Please Login</h2>
            <div>
                <div className="hero mt-4">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card shrink-0 border-2 w-[400px]">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className=" text-lg">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className=" text-lg">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter Your password" className="input input-bordered" required />
                                    <label className="label font-bold underline ml-64 mt-1 text-lg ">
                                        <Link to={'/register'}>Register</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg">Login</button>
                                </div>

                            </form>
                            <div className="w-10 ml-8 mb-2">
                                <button><img src={google} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;