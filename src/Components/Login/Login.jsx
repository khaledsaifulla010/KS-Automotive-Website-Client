
import { createUserWithEmailAndPassword, } from "firebase/auth";
import auth from "../Firebase/firebaseConfig";
import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";
import googleImage from '../../assets/image/2.Google.png'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";




const Login = () => {

    const { googleSignIn } = useContext(AuthContext)

    const [loginUser, SetLoginUser] = useState(null);


    const { user, logOut } = useContext(AuthContext);



    const handleGoogleSignIn = () => {


        googleSignIn()
            .then(result => {
                // const user = result.user;
                // SetLoginUser(user)
                Swal.fire({
                    title: 'Great!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Already  Use This Email',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }

    const handleLogOut = () => {
        logOut().then()
    }






    const handleLogin = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;



        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Already  Use This Email',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }





    return (
        <div>

            <div>
                {user && <div className="text-right lg:text-xl font-bold lg:mr-8 mr-2">
                    <div className="flex items-center justify-end gap-2 lg:mb-24 mt-8">
                        <img className="w-8 rounded-lg" src={user?.photoURL} />
                        <h3>Email: {user?.email} </h3>
                        <button onClick={handleLogOut} className="bg-purple-500 text-white text-sm font-black p-2 rounded-lg ">Logout</button>
                    </div>
                </div>}
            </div>
            <div>
                {loginUser && <div className="text-right text-xl font-bold mr-8 ">
                    <div className="flex items-center justify-end gap-2 mb-24 mt-8">
                        <img className="w-8 rounded-lg" src={loginUser?.photoURL} />
                        <h3>Email: {loginUser?.email} </h3>
                        <button onClick={handleLogOut} className="bg-purple-500 text-white text-sm font-black p-2 rounded-lg ">Logout</button>
                    </div>
                </div>}
            </div>

            <div className="lg:flex items-center justify-center gap-20">
                <div>
                    <h1 className="text-center lg:text-4xl text-2xl font-extrabold mt-12 ">Please Login</h1>
                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="border-2 rounded-lg lg:w-[450px] lg:h-[400px] lg:mb-8 mt-8 bg-pink-500">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-white text-lg">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-white text-lg">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <Link className="text-lg underline ml-[307px] font-bold" to={'/register'}>Register</Link>
                                        </label>

                                    </div>
                                    <div className="form-control mt-">
                                        <button className="bg-violet-600 p-2 rounded-lg font-black text-white text-lg">Login</button>
                                    </div>

                                    <div className="form-control mt-2" >
                                        <button onClick={handleGoogleSignIn} className="bg-white p-2 rounded-full w-12"> <img src={googleImage} alt="" /> </button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Login;