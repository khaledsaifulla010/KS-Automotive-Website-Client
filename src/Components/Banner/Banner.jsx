import banner from '../../assets/image/3.Model-S.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero w-[1445px] ml-10 ">
                <img src={banner} alt="" />
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">BIG SALE 10% OFF</h1>
                        <p className="mb-5 font-bold text-xl">Rev up your savings! 10% off all Cars in stock!</p>
                        <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-lg font-bold">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;