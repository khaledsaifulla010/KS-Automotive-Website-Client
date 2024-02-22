import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";


const Root = () => {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btnImg, setBtnImg] = useState(<MdDarkMode></MdDarkMode>);

    const toggleStyle = () => {
        if (myStyle.color == 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnImg(<CiLight></CiLight>)
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnImg(<MdDarkMode></MdDarkMode>)
        }
    }
    return (
        <div>

            <div style={myStyle}>
                <div className="flex items-center justify-between mr-12">

                    <div className="gap-8">
                        <Navbar></Navbar>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className=" border-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-5xl">
                            <button onClick={toggleStyle}>
                                {btnImg}
                            </button>
                        </div>

                    </div>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;