import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import Image from 'next/image';
export default function BrowseCategory() {

    const items = ['Phones', 'Computers', "Smartwatches", 'Cameras', "Headphones", "Gaming"];

    return (
        <div className="mt-4 flex flex-col justify-content-center bg-gray-50 py-20 md:py-5">
            <div className="container">
                <div className="flex flex items-center justify-center">
                    <h4>Browse by Category</h4>
                    <div 
                    className="flex flex-1 justify-end gap-4">
                        <FaChevronLeft />
                        < FaChevronRight />
                    </div>
                </div>
                <div >
                    {
                         <div className="gridContainer">
                         {
                           items.map((item, index) => (
                            <div key={index} className="px-4 pt-4">
                                <div className="rounded-[14px] flex flex-col align-items-center justify-center gap-2.5 bg-gray-200 p-6 sm:p-5">
                                    <p className="d-flex align-items-center justify-content-center text-base font-medium !text-main-black-0 mb-0">
                                        {index == 0 ?   
                                            <IoPhonePortraitOutline color='black' style={{ textAlign: "center" }} />
                                            : index == 1 ? <HiOutlineComputerDesktop color='black' />
                                                : index == 2 ? <FaGamepad color="black" />
                                                    : index == 3 ? <IoCameraOutline color='black' />
                                                        : index == 4 ? <IoHeadsetOutline color='black' />
                                                            : <IoPhonePortraitOutline color='black' />}

                                        

                                    </p>
                                    {item}
                                </div>
                            </div>
                        ))
                         }
                     </div>
                       
                    }
                </div>

            </div >
        </div >
    );
}