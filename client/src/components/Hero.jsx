import CTA from "./CTA";
import Navbar from "./Navbar";
import Services from "./Services";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#392a5c] to-[#030008] font-poppins italic flex flex-col min-h-screen">
                <Navbar />
                {/* Grid with responsive behavior */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center px-6 sm:px-10 py-10">
                    {/* CTA Section */}
                    <CTA />

                    {/* GIF Section */}
                    <motion.img 
                        src="https://assets-v2.lottiefiles.com/a/7b595d22-2680-11ef-884c-7be2b3443041/it77ydmUnw.gif" 
                        alt="Hero Animation"
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0"
                        initial={{ x: 80, opacity: 0, scale: 0 }}
                        transition={{ duration: 1.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1.1, rotate: [-5, 5, -5] }}  
                        whileHover={{ rotate: -5 }}
                    />
                </div>
            </div>
            <Services />
        </div>
    )
}
