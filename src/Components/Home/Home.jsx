
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";
import BrandsCard from "../BrandsCard/BrandsCard";


const Home = () => {
    const Brands = useLoaderData();
    console.log(Brands);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 mt-16 gap-y-8 m-8 ml-16">
                {
                    Brands.map(Brand => <BrandsCard key={Brand._id} Brand={Brand}></BrandsCard>)
                }
            </div>
            <Services></Services>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;