import { createUserWithEmailAndPassword, } from "firebase/auth";
import auth from "../Firebase/firebaseConfig";
import { Link } from "react-router-dom";
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)





        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                Swal.fire({
                    title: 'Great!',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            })
            .catch(error => {

                // eslint-disable-next-line no-useless-escape
                if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/
                    .test(password)) {
                    Swal.fire({
                        title: 'OPPS!',
                        text: 'Minimum Six Characters, AtLeast One Capital Letter & One Special Character',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <div>
            <div>
                <h1 className="text-center lg:text-4xl text-2xl font-extrabold mt-12 ">Please Register</h1>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="border-2 rounded-lg lg:w-[450px] lg:h-[400px] lg:mb-8 mt-8 bg-pink-500">
                            <form onSubmit={handleRegister} className="card-body">
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
                                        <Link className="text-lg underline ml-[330px] font-bold" to={'/login'}>Login</Link>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="bg-violet-600 p-2 rounded-lg font-black text-white text-lg">Register</button>
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