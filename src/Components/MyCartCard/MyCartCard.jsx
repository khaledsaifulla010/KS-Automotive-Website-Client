import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const MyCartCard = ({ newCart }) => {
    const { img, model, price, rating } = newCart
    return (
        <div>
            <h2>
                <div className="card card-compact w-[600px] h-[520px] p-6 border-2 bg-slate-400">
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


                        
                    </div>
                </div>
            </h2>
        </div>
    );
};

export default MyCartCard;