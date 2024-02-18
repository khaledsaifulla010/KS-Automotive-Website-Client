import sellsCars from '../../assets/image/sellsCars.png'
import carsSecurity from '../../assets/image/carsSecurity.png'
import carRepairing from '../../assets/image/carRepairing.png'
import carConsultancy from '../../assets/image/carConsultancy.png'


const Services = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center mt-16 mb-8'>Our Services</h1>
            </div>
            <div className='m-8 flex items-center justify-around '>
                <div className="card  w-[350px] h-[400px] border-4">
                    <figure className="px-10 pt-10">
                        <img src={sellsCars} alt="" className="rounded-xl  w-[160px] shadow" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl">Sells Cars</h2>
                        <p className='text-justify'>Our car dealership offers top-notch vehicles, financing options, trade-ins, and exceptional customer service to ensure your satisfaction. Drive home happy today!</p>

                    </div>
                </div>
                <div className="card  w-[350px]  h-[400px] border-4">
                    <figure className="px-10 pt-10">
                        <img src={carsSecurity} alt="" className="rounded-xl  w-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl -mt-6">Cars Security</h2>
                        <p className='text-justify'>Protect your vehicle with our advanced security services, including GPS tracking, alarm systems, and 24/7 monitoring for ultimate peace of mind.</p>

                    </div>
                </div>
                <div className="card  w-[350px]  h-[400px] border-4">
                    <figure className="px-10 pt-10">
                        <img src={carRepairing} alt="" className="rounded-xl  w-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl ">Cars Repairing</h2>
                        <p className='text-justify'>Experience expert car repair services including diagnostics, maintenance, engine repairs, and bodywork, ensuring your vehicle runs smoothly and safely on the road.</p>

                    </div>
                </div>
                <div className="card  w-[350px]  h-[400px] border-4">
                    <figure className="px-10 pt-10">
                        <img src={carConsultancy} alt="" className="rounded-xl  w-[160px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl">Cars Consultancy</h2>
                        <p className='text-justify'>Our consultancy offers personalized advice on car selection, financing, and maintenance, ensuring you make informed decisions for your driving needs and budget.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;