import SideBar from "@Page/home/sideBar/SideBar";
import Chat from "./Chat/Chat";

const Home = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 sm:h-[450px] md:h-[550px]">
      <SideBar />
      <Chat />
    </div>
  );
};

export default Home;
