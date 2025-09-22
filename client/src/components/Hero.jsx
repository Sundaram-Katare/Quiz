import CTA from "./CTA";
import Navbar from "./Navbar";
import Services from "./Services";

export default function Hero() {
    return (
        <>
            <div>
                <div className="bg-gradient-to-r from-[#5830af] to-[#a58cda] flex flex-col min-h-screen">
                    <Navbar />
                    <div className="grid grid-cols-2 gap-10 justify-center items-center">
                        <CTA />
                        <img src="images/hero.png" alt="" />
                    </div>
                </div>
                <Services />
            </div>
        </>
    )
}