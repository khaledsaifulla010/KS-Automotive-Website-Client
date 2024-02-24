import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Please Register</h2>
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
                                    <label className="label font-bold underline ml-[275px] mt-1 text-lg">
                                        <Link to={'/login'}>Login</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold text-lg">Register</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;