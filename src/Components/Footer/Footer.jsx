import companyLogo from '../../assets/image/1.Company-Logo.jpg'
const Footer = () => {
    return (
        <div className="m-8">
            <footer className="footer p-10 bg-black text-white rounded-lg">
                <div className='flex items-center justify-between gap-64'>
                    <div>
                        <img className='lg:w-16 rounded-xl lg:h-10' src={companyLogo} alt="" />
                        <p className='font-bold mt-2'>KS AUTOMOTIVE LIMITED <br />Providing Reliable Automotive Services Since 2024 <br />@All Rights Reserved by KS AUTOMOTIVE LIMITED</p>
                    </div>
                    <div>
                        <nav className='grid'>
                            <h6 className="text-xl text-white font-bold">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                    </div>
                    <div>
                        <nav className='grid'>
                            <h6 className="text-xl text-white font-bold">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                    </div>
                    <div>
                        <nav className='grid mb-4'>
                            <h6 className="text-xl text-white font-bold">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;