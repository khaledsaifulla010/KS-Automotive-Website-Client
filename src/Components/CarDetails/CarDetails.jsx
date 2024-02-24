import { useLoaderData } from "react-router-dom";


const CarDetails = () => {
    const carDetail = useLoaderData();
    const { img, model,descriptions } = carDetail
    return (
        <div>
            <div>
                <div className="hero w-[1000px] h-[780px] ml-[250px] border-2  rounded-xl bg-slate-400">
                    <div className="hero-content">
                        <div className="">
                            <img className="w-[800px] ml-[80px]  rounded-xl" src= {img} alt="" />
                            <h1 className="text-5xl font-bold text-center mt-4">{model}</h1>
                            <p className="font-semibold text-lg text-justify mt-2 text-white">{descriptions}</p>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-lg text-white p-2 w-96 ml-72 mt-8">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;