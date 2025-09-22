import Steps from "./Steps"

export default function LeaderboardAd() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#5830af] to-[#a58cda] min-h-screen p-8 pt-20">
                <div className="flex justify-center flex-col items-center">
                    <div className="text-center">
                        <h1 className="text-7xl font-extrabold text-white">Climb the Leaderboard</h1>
                        <p className="text-xl mt-6 text-white">Show the world who you are! By aiming for the Top Spot!</p>
                    </div>

                    <div className="m-8">
                       <img src="images/leaderboard.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}