import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
    return (
        <>
         <nav className="flex flex-row justify-between p-6 bg-transparent text-white">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold">Lumin</h1>
            </div>

            <div className="flex flex-row justify-between gap-4 text-lg font-semibold">
                <h2 className="flex justify-center items-center space-x-1 cursor-pointer">Trivia <FaAngleDown /></h2>
                <h2 className="flex justify-center items-center space-x-1 cursor-pointer">Quiz <FaAngleDown /></h2>
                <h2 className="flex justify-center items-center space-x-1 cursor-pointer">Leaderboard <FaAngleDown /></h2>
            </div>

            <div className="flex justify-center items-center">
                <button className="bg-[#5830af] font-semibold rounded-2xl px-2 py-1 text-xl">Login</button>
            </div>
         </nav>
        </>
    )
}