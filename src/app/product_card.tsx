import React from 'react';
import Button from 'react-bootstrap/Button';

interface GridViewProps {
    items: Array<object>;
}

const Card: React.FC<GridViewProps> = ({ items }) => {
    const list = [
        {
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
            "name": "Iphone 14",
            "price": "$299",
        },
        {
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
            "name": "Iphone 12",
            "price": "$239",
        },
        {
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
            "name": "Iphone 14 max pro",
            "price": "$399",
        },
        {
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
            "name": "Iphone 14 mini",
            "price": "$199",
        },
        {
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
            "name": "Airpods",
            "price": "$59",
        },
       
       

    ];
    return (
        <div className="gridContainer">
            {list.map((item, index) => ( 
                <div key={index} className="gridItem">
                    {<img src={item.image}></img>}
                    {<p  style={{color:"black",fontWeight:"500",fontSize:"16px",marginBottom:"0px",marginTop:"4%"}}>{item.name}</p>}
                    {<p style={{color:"black",fontWeight:"600",fontSize:"24px",marginBottom:"0px"}}>{item.price}</p>}
                    <Button href='/Pages/productdetail' className="col-lg-6 col-md-6 col-sm-4 mt-6" variant="dark">Buy Now</Button>
                </div>
                
            ))}
        </div>
    );
}; 

export default Card;

