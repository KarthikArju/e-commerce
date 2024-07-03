// To inform next js, this is a client component 
"use client"; 
import Card from "./product_card";
import { useState } from "react"; 

export default function ProductList() {
    const [selectedItem, setselectedItem] = useState(0); 

    const list = [
        {
            "image": "",
            "name": "Iphone 14",
            "price": "$299",
        },
        {
            "image": "",
            "name": "Iphone 12",
            "price": "$239",
        },
        {
            "image": "",
            "name": "Iphone 14 max pro",
            "price": "$399",
        },
        {
            "image": "",
            "name": "Iphone 14 mini",
            "price": "$199",
        },
        {
            "image": "",
            "name": "Airpods",
            "price": "$59",
        },

    ];
    return (
        <section className="container" style={{ marginTop: "3%" }}>
            <div className="row container">
                <div className={`col-lg-2 col-md-1 col-sm-1 ${selectedItem==0 ? "selectedItem-bg" : "unselectedItem-bg"}`} onClick={()=> setselectedItem(0)}>
                    New Arrival 
                </div>
                <div className={`col-lg-2 col-md-2 col-sm-2 ${selectedItem==1 ? "selectedItem-bg" : "unselectedItem-bg"}`} onClick={()=> setselectedItem(1)}>
                    Best Seller
                </div>
                <div className={`col-lg-2 col-md-2 col-sm-2 ${selectedItem==2 ? "selectedItem-bg" : "unselectedItem-bg"}`} onClick={()=> setselectedItem(2)}>
                    Featured Products
                </div>
            </div>
            {
               <Card items={list}/>
            }
            <div className="pt-8" style={{fontWeight:"600",fontSize:"24px",color:"black"}}>
                Discount Upto 50%
            </div>
            <Card  items={list}/> 
            
        </section>
    );
}