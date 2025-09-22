import { FaPlay } from "react-icons/fa";

export default function CTA() {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-8 ">
                <div className="flex flex-col justify-center p-8 ">
                    <div className="flex flex-col mb-8">
                        <h1 className="text-6xl font-extrabold text-white">Daily Quiz, Daily</h1>
                        <br />
                        <h1 className="text-6xl font-extrabold text-white">Bonus - Play Today!</h1>
                    </div>

                    <div className="mb-8 text-white font-md">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere reiciendis voluptatem nesciunt fuga. F
                            ugit iure soluta vitae rerum.</p>
                    </div>

                    <div>
                        <button className="flex justify-center items-center gap-1 bg-yellow-400 text-black font-semibold text-2xl rounded-md px-2 py-1">
                            <FaPlay />
                            Play Today
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}