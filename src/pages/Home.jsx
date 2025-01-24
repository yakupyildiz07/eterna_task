import BottomBar from "../components/BottomBar";
import StatusBar from "../components/StatusBar";
import HomePage from "../components/home/HomePage";

const Home = () => {
  return (
    <div >
      <StatusBar />
      <HomePage />
      <BottomBar current="home" />
    </div>
  );
};
export default Home;
