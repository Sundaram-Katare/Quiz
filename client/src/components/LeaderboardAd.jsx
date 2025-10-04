export default function LeaderboardAd() {
    return (
        <div className="bg-gradient-to-r from-[#392a5c] to-[#030008] min-h-screen p-6 sm:p-8 pt-20 font-poppins flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-4xl w-full">
                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white italic leading-tight">
                    Climb the Leaderboard
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 text-white italic max-w-2xl mx-auto">
                    Show the world who you are! By aiming for the Top Spot!
                </p>

                {/* Image */}
                <div className="mt-6 sm:mt-8 w-full lg:h-full flex justify-center">
                    <img 
                        src="images/leaderboard2.png" 
                        alt="Leaderboard" 
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
