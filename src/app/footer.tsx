import Image from "next/image";
export default function Footer() {
    return (
        <section className="footer-bg">
            <div className="d-flex justify-content-between flex-column flex-sm-row">
                <div className="col-lg-4 col-md-4 col-sm-12"> 
                    <Image src="/assets/app_white_logo.png" height={100} width={100} alt=""/>
                    <p style={{paddingTop:"4%",fontWeight:"500",fontSize:"14px",color:"white"}}>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div> 
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p style={{fontWeight:"600",fontSize:"16px",color:"white"}}>Services</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Bonus Program</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Gift Cards</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Credit and Payment</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Service contracts</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Non-cash account</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Payment</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p style={{fontWeight:"600",fontSize:"16px",color:"white"}}>Assistance to the buyer</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Find an Order</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Terms of delivery</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Exchange and return of goods</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Gurantee</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Frequently asked questions</p>
                    <p style={{fontWeight:"300",fontSize:"14px",color:"white"}}>Terms of use of the site</p>
                </div>
            </div>
        </section>
    );
}