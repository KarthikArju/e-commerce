import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

export default function Home() {
    const headerItems = [
        "Phones",
        "Computers",
        "Smartwatches",
        "Cameras",
        "Headphones",
        "Gaming"

    ];
    return (
        <section >  
             {/* <div className='sub-header-bg d-flex mt-16'>
                {
                    headerItems.map((items, index) => (
                        <div key={index} style={{ color: "white", fontSize: "16px", fontWeight: "300" }} className="col-lg-2 col-md-2 col-sm-12 row justify-content-center">
                            <div className="col-lg-1 col-md-1 col-sm-12 pt-1">{
                                index == 0 ? <IoPhonePortraitOutline />
                                    : index == 1 ? <HiOutlineComputerDesktop />
                                        : index == 2 ? <FaGamepad />
                                            : index == 3 ? <IoCameraOutline />
                                                : index == 4 ? <IoHeadsetOutline />
                                                    : <FaGamepad /> 
                            }</div>
                            <div className="col-lg-1 col-md-1 col-sm-12">{items}</div>
                        </div>
                    ))
                }  



            </div> */}
           <div className="home-bg">
           
                <div className="d-flex flex-column flex-sm-row justify-content-between overflow-hidden pr-8 pt-4" style={{overflow:"hidden"}}>
                    <div style={{ paddingLeft: "8%", paddingTop: "14%" }} 
                    // className="col-lg-6 col-md-6 col-sm-12 text-style"
                    >
                        <div style={{ color: "white", marginBottom: "0px" }}>Pro Beyond <br />
                            <span style={{ color: "white", fontWeight: "200", fontSize: "50px", marginBottom: "0px" }}>
                                IPhone 14 <span style={{ fontWeight: "600", fontSize: "50px", marginBottom: "0px" }}>Pro</span>
                            </span>
                        </div>
                        <p style={{ color: "white", marginBottom: "0px" }}>Created to change everything for the better. For everyone</p>
                        <Button className="col-lg-4 col-md-4 col-sm-4 mt-4" variant="outline-light">Shop Now</Button>
                        
                    </div>
                    <div 
                    className="img-fluid "
                    
                    // className="col-lg-4 col-md-4 col-sm-12"
                    >   
                        <Image
                            className="img-fluid "
                            src="/assets/Iphone_img.png"
                            alt=""
                            width={400}
                            height={300}
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}