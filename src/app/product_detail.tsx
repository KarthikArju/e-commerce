import Image from "next/image";
import Button from 'react-bootstrap/Button';
import { CiStar } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineWarehouse } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ProductDetail() {
    return (
        <section style={{ backgroundColor: "white" }}>
            <div className={"container productPage"}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="mainImage">
                            <Image src="/assets/iphone_14.png" alt="" height={400} width={400} className="img-fluid" />
                        </div>
                        <div className={"d-flex flex-column thumbnailImages"}>
                            {/* <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70&crop=false" alt="Thumbnail 1" />
                            <img src="/path-to-your-thumbnail2.png" alt="Thumbnail 2" />
                            <img src="/path-to-your-thumbnail3.png" alt="Thumbnail 3" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="productDetails">
                            <h2>Apple iPhone 14 pro max</h2>
                            <div className="d-flex">
                                <p className="col-lg-2 col-md-2 col-sm-2 newPrice">$1299</p>
                                <p className="col-lg-2 col-md-2 col-sm-2 oldPrice">$1499</p>
                            </div>
                            <div className="colorOptions">
                                <span>Select color:</span>
                                <div className="colors">
                                    <span className="color" style={{ backgroundColor: 'red' }}></span>
                                    <span className="color" style={{ backgroundColor: 'purple' }}></span>
                                    <span className="color" style={{ backgroundColor: 'yellow' }}></span>
                                    <span className="color" style={{ backgroundColor: 'white' }}></span>
                                </div>
                            </div>
                            <div className="storageOptions">
                                <button className="btn storageButton">128GB</button>
                                <button className="btn storageButton">256GB</button>
                                <button className="btn storageButton">512GB</button>
                            </div>
                            <div className="row my-3">
                                <div className="col-6">
                                    <div className="spec">
                                        <i className="fa fa-desktop"></i> Screen size: 6.7"
                                    </div>
                                    <div className="spec">
                                        <i className="fa fa-microchip"></i> CPU: Apple A16 Bionic
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="spec">
                                        <i className="fa fa-camera"></i> Main camera: 48-12-12 MP
                                    </div>
                                    <div className="spec">
                                        <i className="fa fa-battery-full"></i> Battery capacity: 4323 mAh
                                    </div>
                                </div>
                            </div>
                            <p className="description">
                                Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day.
                            </p>
                            <div className="d-flex flex-column flex-sm-row col-lg-6 col-md-6 col-sm-12">
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <Button className="col-lg-10 col-md-10 col-sm-12 mt-8" variant="outline-dark">Add to Wishlist</Button>
                                </div>
                                <div className="col-lg-6 col-md-7 col-sm-12">
                                    <Button href="/Pages/cart" className="col-lg-10 col-md-10 col-sm-12 mt-8" variant="dark">Add to Cart</Button>
                                </div> 

                            </div>
                            <div className="">

                            </div>
                            <div className="row pt-4 justify-content-center align-items-center">
                                <div className="col-lg-4 col-md-4 col-sm-12 row align-items-center pt-4"> 
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                    <CiDeliveryTruck size={24}/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10">
                                    <div>Free Delivery</div>
                                    <div>1-2 Day</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 row align-items-center pt-4"> 
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                    <MdOutlineWarehouse size={24}/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10">
                                    <div>Instock</div>
                                    <div>Today</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 row align-items-center flex-column flex-sm-row pt-4"> 
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                    <MdOutlineVerified size={24}/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10">
                                    <div>Guranteed</div>
                                    <div>1 Year</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container details">
                <h2>Details</h2>
                <p>
                    Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                </p>
                <div className="tableContainer">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th >Screen</th>
                            </tr>
                            <tr>
                                <td>Screen diagonal</td>
                                <td>6.7"</td>
                            </tr>
                            <tr>
                                <td>The screen resolution</td>
                                <td>2796x1290</td>
                            </tr>
                            <tr>
                                <td>The screen refresh rate</td>
                                <td>120 Hz</td>
                            </tr>
                            <tr>
                                <td>The pixel density</td>
                                <td>460 ppi</td>
                            </tr>
                            <tr>
                                <td>Screen type</td>
                                <td>OLED</td>
                            </tr>
                            <tr>
                                <td>Additionally</td>
                                <td>
                                    Dynamic Island<br />
                                    Always-On display<br />
                                    HDR display<br />
                                    True Tone<br />
                                    Wide color (P3)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th >CPU</th>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>A16 Bionic</td>
                            </tr>
                            <tr>
                                <td>Number of cores</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex align-items-center justify-content-center"> 
                <Button className="mt-4" variant="outline-dark">View More</Button>
                </div>
            </div>
            {/* ................................................Reviews...................... */}
            <div className="container reviews">
                <div className="overview">
                    <h1>Reviews</h1>
                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                        <div className="col-lg-3 col-md-3 col-sm-12 rating">
                            <span className="score">4.8</span>
                            <span className="totalReviews">of 125 reviews</span>
                            <div className="stars">
                                {(() => {
                                    const renderedItems = [];
                                    for (let i = 0; i < 5; i++) {
                                        renderedItems.push(
                                            <CiStar key={i} size={24}/>
                                        );
                                    }
                                    return renderedItems;
                                })()}
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 pl-4">
                            <div className="d-flex align-items-center pt-2">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    Excellent
                                </div>
                                <div style={{ height: "8px", width: "250px", borderRadius: "8px", backgroundColor: "orange" }}>

                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    Good
                                </div>
                                <div style={{ height: "8px", width: "300px", borderRadius: "8px", backgroundColor: "orange" }}>

                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    Average
                                </div>
                                <div style={{ height: "8px", width: "300px", borderRadius: "8px", backgroundColor: "orange" }}>

                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    Below Average
                                </div>
                                <div style={{ height: "8px", width: "100px", borderRadius: "8px", backgroundColor: "orange" }}>

                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    Poor
                                </div>
                                <div style={{ height: "8px", width: "100px", borderRadius: "8px", backgroundColor: "orange" }}>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <textarea placeholder="Leave Comment" className="commentBox"></textarea>
                <div className="reviewsList">
                    <div className="review">
                        <div className="reviewHeader">
                            <div className="reviewerName">Grace Carey</div>
                            <div className="reviewDate">24 January, 2023</div>
                        </div>
                        <div className="reviewBody">
                            {/* Insert review content here */}
                        </div>
                    </div>
                    {/* Repeat for other reviews */}
                </div>
                <div className="d-flex align-items-center justify-content-center"> 
                <Button className="mt-4" variant="outline-dark">View More</Button>
                </div>
            </div>
        </section>
    );
}