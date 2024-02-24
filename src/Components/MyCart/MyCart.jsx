import { useLoaderData } from "react-router-dom";
import MyCartCard from "../MyCartCard/MyCartCard";

const MyCart = () => {
    const newCarts = useLoaderData();

    return (
        <div className="grid grid-cols-2 ml-24">
            {
                newCarts.map(newCart => <MyCartCard key={newCart._id} newCart={newCart}></MyCartCard>)
            }
        </div>
    );
};

export default MyCart;