import Image from "next/image";
export default function Sales() {
    return (
        <section>
            <Image src="/assets/sale_banner.png" className="img-fluid sale_banner" 
            height={1000} width={1000} alt=""
            />
            
        </section>
    );
}