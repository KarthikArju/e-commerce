import Image from "next/image";
import Header from "./header";
import DashBoard from "./dashboard";
import Footer from "./footer";
import ProductDetail from "./product_detail";

import Checkout from "./checkout";
import Cart from "./cart";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <main> 
      <Header />
      <DashBoard/>
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <ProductDetail />  */}

     
      <Footer />
    </main >
  );
}  
