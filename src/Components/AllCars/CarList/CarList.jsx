import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartCard from "../../CarCard/CartCard";



const CarList = () => {

    const [brandCars, setBrandCars] = useState([])

    const { name } = useParams()
    console.log(name)
    useEffect(() => {
        fetch(`https://2-ks-automotive-website-server.vercel.app/AllCars/${name}`)
            .then(res => res.json())
            .then(data => setBrandCars(data))

    }, [name])
    console.log(brandCars)

    return (
        <div className="grid grid-cols-2 ml-24 mt-16   gap-x-10 gap-y-12 ">
            {
                brandCars.length > 0 &&
                brandCars.map(brandCar => <CartCard key={brandCar._id} brandCar={brandCar} ></CartCard>)
            }

        </div>
    );
};

export default CarList;