import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const CartCard = ({ brandCar }) => {
    const { img, model, price, rating } = brandCar;
    return (
        <div>
            <div>
                <div className="card card-compact w-[600px] h-[490px] p-6 border-2 bg-gradient-to-r from-indigo-400 from-7% via-sky-400 via-30% to-emerald-400 to-80%">
                    <figure><img src={img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className=" border-2 w-[400px] ml-12 mt-2 p-2 rounded-lg bg-rose-400 text-white text-center font-bold text-lg">{model}</h2>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center border-2 w-48 mt-4 font-bold rounded-xl  bg-fuchsia-400 p-2 text-white  text-lg">
                                <h2 className="ml-4">Price : {price}</h2>
                                <FaDollarSign></FaDollarSign>
                            </div>


                            <div className="flex items-center border-2 w-48 mt-4 font-bold rounded-xl  bg-green-400 p-2 text-white  text-lg gap-1">
                                <h2 className="ml-6">Rating : {rating}</h2>
                                <FcRating></FcRating>
                            </div>
                        </div>


                        <div className="flex items-center justify-between mt-8 ">
                            <Link>
                                <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-xl text-white p-2 w-48">Details</button>
                            </Link>
                            <Link>
                                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg font-bold text-xl text-white p-2 w-48">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;