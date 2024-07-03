import Image from 'next/image';
import Button from 'react-bootstrap/Button';
export default function FeaturedProducts() {
    return (
        <section className='d-flex flex-column flex-sm-row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='pt-8 col-lg-12 col-md-12 col-sm-12 d-flex  flex-column flex-sm-row justify-content-between align-items-center'>
                    <Image className='col-lg-5 col-md-6 col-sm-6 overflow-hidden pr-24' src={"/assets/PlayStation.png"} height={300} width={300} alt='' />
                    <div className='col-lg-7 col-md-6 col-sm-6 pt-4'>
                        <h1 className='text-sm-start text-center'>Playstation 5</h1>
                        <h4 className='p-2 text-sm-start text-center' style={{ color: "#909090", fontSize: "16px", fontWeight: "500" }}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</h4>
                    </div>
                </div>
                <div className='pt-24 d-flex align-items-center flex-column flex-sm-row'>

                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-center'>

                        <Image className='col-lg-3 col-md-3 col-sm-3 ' src={"/assets/air_pods.png"} height={300} width={300} alt='' />
                        <div style={{ paddingRight: "5%" }} className='col-lg-6 col-md-6 col-sm-12 pt-4'>
                            <h1 className='text-sm-start text-center fw-normal'>Apple Airpods <span className='fw-bold'>Max</span></h1>
                            <h4 className='p-2 text-sm-start text-center' style={{ color: "#909090", fontSize: "16px", fontWeight: "500" }}>Computational audio. Listen, it's powerful</h4>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-center' style={{ backgroundColor: "#353535", paddingTop: "5%", paddingBottom: "5%", paddingRight: "4%" }}>
                        <Image className='col-lg-6 col-md-6 col-sm-3 img-fluid' src={"/assets/vision_pro.png"} height={200} width={200} alt='' />
                        <div style={{ paddingRight: "5%" }} className='col-lg-6 col-md-6 col-sm-12'>
                            <h1 style={{ color: "white" }} className='text-sm-start text-center fw-normal'>Apple Vison <span className='fw-bold'>Pro</span></h1>
                            <h4 className='p-2 text-sm-start text-center' style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>An immersive way to experience entertainment</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#EDEDED" }} className='d-flex flex-column flex-sm-row justify-content-center col-lg-6 col-md-6 col-sm-12 pt-16 align-items-center overflow-hidden pl-3'>
                <div className='col-lg-6 col-md-4 col-sm-4 text-sm-start text-center' style={{ fontWeight: "200", fontSize: "34px", color: "black" }}>
                    Macbook <span style={{ fontWeight: "600", fontSize: "34px", color: "black" }}>Air</span>
                    <div className='text-sm-start text-center col-lg-8 col-md-4 col-sm-4' style={{ fontWeight: "500", fontSize: "14px", color: "#909090" }}>
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                    </div>
                    <Button className="text-sm-start text-center  col-lg-4 col-md-4 col-sm-4 mt-4" variant="outline-dark">Shop Now</Button>
                </div>
                <div className='mac-img'>
                    <Image
                        src="/assets/mac_14.png"
                        className='object-fit-cover h-100 w-100'

                        height={468.17} width={682.08} alt=""
                    />
                </div>

            </div>
        </section>
    );
}