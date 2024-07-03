import Home from "./home";
import FeaturedProducts from './featured_products';
import BrowseCategory from "./category_browse";
import ProductList from "./product_list";
import Sales from "./festive_sale";
import BestProducts from "./best_products";
export default function DashBoard(){
    return(
       <div>
         <Home />
        <FeaturedProducts />
        <BrowseCategory />
        <ProductList />
        <BestProducts/>
        <Sales />
       </div>
    );
}