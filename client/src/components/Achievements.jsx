import Numbers from "./Numbers";

export default function Achievements() {
  return (
    <div className="bg-gradient-to-r from-[#5830af] to-[#a58cda] min-h-screen p-8 flex flex-col">
      <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 text-center sm:text-left">Success</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <p className="text-white text-lg sm:text-xl leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque hic doloremque labore similique voluptates neque accusantium. Impedit dolore iure veniam corporis placeat. Consectetur odit aut, expedita iure quis possimus!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Numbers />
        </div>
      </div>
    </div>
  )
}
