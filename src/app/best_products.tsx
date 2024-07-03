// To inform next js, this is a client component 
"use client"; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function BestProducts() {
    return (
        <section className="mt-4 mb-4">
            <div className="d-flex flex-column flex-sm-row">
                <Card  className='col-lg-3 col-md-3 col-sm-12 p-2'>
                    <Card.Img  src="/assets/iphone_14.png" className='img-fluid' height={200} width={200}/>
                    <Card.Body>
                        <Card.Title>Popular Products</Card.Title>
                        <Card.Text>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                        <Button  variant="dark">Shop Now</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card  className='col-lg-3 col-md-3 col-sm-12 p-2'>
                    <Card.Img  src="/assets/mac_14.png" className='img-fluid' height={200} width={200}/>
                    <Card.Body>
                        <Card.Title>IPad Pro</Card.Title>
                        <Card.Text>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                        <Button  variant="dark">Shop Now</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card  className='col-lg-3 col-md-3 col-sm-12 p-2'>
                    <Card.Img  src="/assets/ps5.png" className='img-fluid' height={200} width={200}/>
                    <Card.Body>
                        <Card.Title>Samsung Galaxy</Card.Title>
                        <Card.Text>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                        <Button  variant="dark">Shop Now</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card  className='col-lg-3 col-md-3 col-sm-12 p-2'>
                    <Card.Img  src="/assets/Iphone_img.png" className='img-fluid' height={200} width={200}/>
                    <Card.Body>
                        <Card.Title>MacBook Pro</Card.Title>
                        <Card.Text>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                        <Button  variant="dark">Shop Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}