import SideBar from "@Component/sideBar/SideBar";

const Home = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 sm:h-[450px] md:h-[550px]">
      <SideBar />
    </div>
  );
};

export default Home;
