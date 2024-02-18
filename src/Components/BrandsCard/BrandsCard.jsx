

const BrandsCard = ({ Brand }) => {
    const { name, logo } = Brand;
    return (
        <div>
            <div className="card w-[420px] border-4 bg- bg-slate-400">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="" className="rounded-xl  w-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold text-center border-4 p-2 rounded-xl text-white">{name}</h2>


                </div>
            </div>
        </div>
    );
};

export default BrandsCard;