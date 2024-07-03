
import { MdModeEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
export default function Checkout() {
    const [checkoutStep, setcheckoutStep] = useState(1);
    const address = [
        {
            "line1": "2118 Thornridge",
            "line2": "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            "zipcode": "600014"
        },
        {
            "line1": "2118 Thornridge",
            "line2": "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            "zipcode": "600014"
        },
        {
            "line1": "2118 Thornridge",
            "line2": "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            "zipcode": "600014"
        }
    ];
    return (
        <section className="container">
            <div className="d-flex mt-4 justify-content-center flex-column flex-sm-row">
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center">
                    <div className="col-lg-1 col-md-1 colm-sm-1">
                        <FaLocationDot />
                    </div>
                    <div className="col-lg-6 col-md-6 colm-sm-6">
                        <div>Step 1</div>
                        <div>Address</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center">
                    <div className="col-lg-1 col-md-1 colm-sm-1">
                        <LiaShippingFastSolid />
                    </div>
                    <div className="col-lg-6 col-md-6 colm-sm-6">
                        <div>Step 2</div>
                        <div>Shipping</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center">
                    <div className="col-lg-1 col-md-1 colm-sm-1">
                        <MdOutlinePayments />
                    </div>
                    <div className="col-lg-6 col-md-6 colm-sm-6">
                        <div>Step 3</div>
                        <div>Payment</div>
                    </div>
                </div>
            </div>
            {
                checkoutStep == 1 ? <div>

                    <div className="mt-6">
                        <div className="fw-bold">
                            Select Address
                        </div>
                        {
                            address.map((item, index) => (
                                <div className="d-flex pt-4 justify-content-between">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="d-flex">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option1"
                                                autoComplete="off"


                                            />
                                            <div style={{ paddingLeft: "1%" }}>{item.line1}
                                                <br />
                                                {item.line2}
                                                <br />
                                                {item.zipcode}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="d-flex justify-content-evenly">
                                            <MdModeEdit style={{ paddingRight: "4px" }} size={24} />

                                            <IoMdClose size={24} />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }




                    </div>
                    <div style={{ width: "100%", textAlign: "center", fontWeight: "500", }} className="justify-content-center align-items-center mt-4">
                        <IoMdAddCircle size={32} style={{ width: "100%", textAlign: "center" }} />
                        Add New Address

                    </div>

                </div> : checkoutStep == 2 ? <div>

                    <div className="mt-6">
                        <div className="fw-bold">
                            Shipping Method
                        </div>
                        {
                            address.map((item, index) => (
                                <div className="d-flex pt-4 justify-content-between">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="d-flex">
                                            <input
                                                type="radio"
                                                name="options"
                                                id="option1"
                                                autoComplete="off"


                                            />
                                            <div style={{ paddingLeft: "1%" }}>
                                                {
                                                    index == 0 ? <div>Regularly Shipment</div> : index == 1 ? <div>Get your delivery as soon as possible</div> : <div>Pick a date when you want to get your delivery</div>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="d-flex justify-content-evenly">
                                            <MdModeEdit style={{ paddingRight: "4px" }} size={24} />

                                            <IoMdClose size={24} />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }




                    </div>
                    <div style={{ width: "100%", textAlign: "center", fontWeight: "500", }} className="justify-content-center align-items-center mt-4">
                        <IoMdAddCircle size={32} style={{ width: "100%", textAlign: "center" }} />
                        Add New Address

                    </div>

                </div> : <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
                    <div className="row w-100 max-w-4xl">
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <div className="p-4 bg-white rounded shadow-sm mb-4">
                                <h2 className="h5 mb-3">Summary</h2>
                                <ul className="list-unstyled mb-4">
                                    <li className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-2">
                                        <Image src="/assets/mac_14.png" height={200} width={200} alt="" className="img-fluid" />
                                        <span>Apple Watch Series 9 GPS 41mm</span>
                                        <span className="fw-bold">$1399</span>
                                    </li>
                                    <li className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-2">
                                        <Image src="/assets/iphone.png" height={200} width={200} alt="" className="img-fluid" />
                                        <span>Apple Watch Series 9 GPS 41mm</span>
                                        <span className="fw-bold">$549</span>
                                    </li>
                                    <li className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-2">
                                        <Image src="/assets/smart_watch.png" height={200} width={200} alt="" className="img-fluid" />
                                        <span>Apple Watch Series 9 GPS 41mm</span>
                                        <span className="fw-bold">$399</span>
                                    </li>
                                </ul>
                                <address className="mb-4">
                                    <strong>Address</strong>
                                    <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                                </address>
                                <div className="mb-4">
                                    <strong>Shipment method</strong>
                                    <p>Free</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Subtotal</span>
                                        <span>$2347</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Estimated Tax</span>
                                        <span>$50</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Estimated shipping & Handling</span>
                                        <span>$29</span>
                                    </li>
                                    <li className="d-flex justify-content-between font-weight-bold">
                                        <span>Total</span>
                                        <span>$2426</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="p-4  text-white rounded shadow-sm">
                                <h2 className="h5 mb-3 text-black">Payment</h2>
                                <form>
                                    <div className="mb-3 text-center">
                                        <img src="/assets/credit_card.png" alt="Card" className="img-fluid" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Cardholder Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Card Number"
                                        />
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Exp.Date"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="CVV"
                                            />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                checkoutStep>3 ?<ToastContainer
                className="p-3"
                position="top-end"
                style={{ zIndex: 1 }}
              >
                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Your Order Place Succesfully</strong>
                    
                  </Toast.Header>
                  <Toast.Body>Hello, User please check your mail for further</Toast.Body>
                </Toast>
              </ToastContainer> : <div></div>
            }
            <div className="d-flex justify-content-end pr-4 pb-4">
                <Button onClick={() => setcheckoutStep(checkoutStep > 3 ? 3 : checkoutStep - 1)} className="col-lg-2 col-md-4 col-sm-4 mt-4" style={{ marginRight: "2%" }} variant="outline-dark">Back</Button>

                <Button onClick={() => setcheckoutStep(checkoutStep + 1)} className="col-lg-2 col-md-4 col-sm-4 mt-4" variant="dark">{checkoutStep >= 3 ? <div>Pay</div> : <div>Next</div>}</Button>
            </div>
        </section>

    );
}