import { useSelector, useDispatch } from "react-redux";
import { logout, getPoints } from "../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';

const avatars = [
  "https://png.pngtree.com/png-vector/20240206/ourlarge/pngtree-cartoon-cat-face-cute-pets-for-animal-lovers-png-image_11669254.png",
  "https://previews.123rf.com/images/lar01joka/lar01joka1806/lar01joka180600106/102460633-cute-cat-avatar-sketch.jpg",
  "https://png.pngtree.com/png-clipart/20230430/original/pngtree-cat-avatar-cartoon-design-vector-png-image_9128018.png"
]

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch latest points and update user state on component mount
  useEffect(() => {
    dispatch(getPoints());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col  px-4 py-6">
      <Navbar />
      <div className="flex justify-center items-center m-8">
        <div className="w-full max-w-5xl bg-white/10 shadow-2xl rounded-3xl flex flex-col lg:flex-row items-center lg:items-stretch gap-10 p-6 md:p-12">
          {/* Left: Large Profile Image */}
          <div className="flex justify-center items-center flex-shrink-0 w-full lg:w-[420px]">
            <img
              src={avatars[Math.floor(Math.random() * avatars.length)]}
              alt="User avatar"
              className="rounded-full border-8 border-[#9741cd] shadow-xl w-60 h-60 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] object-cover bg-white"
            />
          </div>
    
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wider">{user?.username}</h1>
            <div className="bg-white/20 rounded-2xl shadow-lg p-6 mt-4 flex flex-row items-center gap-4">
              <span className="text-yellow-300 text-3xl">🏅</span>
              <span className="text-xl md:text-2xl font-medium text-white">Quiz Participated:</span>
              <span className="ml-2 text-2xl md:text-3xl font-bold text-white">{user?.quizParticipated}</span>
            </div>

            <div className="bg-white/20 rounded-2xl shadow-lg p-6 mt-4 flex flex-row items-center gap-4">
              <span className="text-yellow-300 text-3xl">🪙</span>
              <span className="text-xl md:text-2xl font-medium text-white">Points:</span>
              <span className="ml-2 text-2xl md:text-3xl font-bold text-white">{user?.points}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
