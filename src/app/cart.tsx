import Image from "next/image";
import { IoClose } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
export default function Cart() {
    const items = [
        {
            "name": "Iphone",
            "image": "",
            "quantity": 1,
            "price": "$562"
        },
        {
            "name": "Headphone",
            "image": "",
            "quantity": 1,
            "price": "$562"
        },
        {
            "name": "Macbook",
            "image": "",
            "quantity": 1,
            "price": "$562"
        }
    ];
    return (
        <section>
            <h4 className="container mt-4">Shopping Cart</h4>
            <div className="container d-flex mt-8 flex-column flex-sm-row">
                <div className="col-lg-6 col-md-6 col-md-12 cart">
                    {
                        items.map((item, index) => (
                            <div key={index} className="d-flex align-items-center pt-6">
                                <div className="col-lg-3 col-md-2 col-sm-8">
                                    <Image height={100} width={100} src="/assets/iphone.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    {item.name}
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 pl-4">
                                    <div className="d-flex justify-content-around align-items-center">
                                        <div className="col-lg-2 col-md-4 col-sm-4">-</div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 qnty-box">{item.quantity}</div>
                                        <div className="col-lg-4 col-md-4 col-sm-4">+</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 pl-4">
                                    {item.price}
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 pl-4">
                                    <IoClose size={28}/>
                                </div>
                            </div>
                        ))

                    }
                </div>
                <div className="col-lg-6 col-md-6 col-md-12">
                    <h2 className="fw-bold pt-4">Order Summary</h2>
                    <div className="field">
                        <label htmlFor="promoCode">Discount code / Promo code</label>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <TextField className="col-lg-8 col-md-8 col-sm-8" id="outlined-basic" label="Code" variant="outlined" />
                    </div>
                    <div className="field">
                        <label htmlFor="cardNumber">Your bonus card number</label>

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <TextField className="col-lg-8 col-md-8 col-sm-8" id="outlined-basic" label="Coupon Code" variant="outlined" />
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-6 col-md-6 col-sm-6 fw-bold">
                            Subtotal
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">$ 50</div>

                    </div>

                    <div className="row pt-4">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            Estimated Tax
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">$ 50</div>

                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-6">Estimated shipping & Handling</div>
                        <div className="col-lg-6 col-md-6 col-sm-6">$ 50</div>
                    </div>
                    <div className="col-12 d-flex justify-content-center pb-4">
                    <Button href="/Pages/checkout" className="col-lg-12 col-md-4 col-sm-4 mt-4" variant="dark">checkout</Button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
} 