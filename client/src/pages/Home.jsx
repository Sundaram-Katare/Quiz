import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LeaderboardAd from "../components/LeaderboardAd";
import Mystery from "../components/Mystery";
import Numbers from "../components/Numbers";
import RoomQuizAd from "../components/RoomQuizAd";

export default function Home() {
    return (
        <>
         <div>
            <Hero />
            <LeaderboardAd />
            <RoomQuizAd />
            <HowItWorks />
            <Footer />
         </div>
        </>
    )
}