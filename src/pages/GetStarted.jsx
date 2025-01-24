import { useState } from "react";
import BottomBar from "../components/BottomBar";
import Ellipses from "../components/getStarted/Ellipses";
import MainContent from "../components/getStarted/MainContent";
import StatusBar from "../components/StatusBar";

const GetStarted = () => {
  //Hangi sayfada olduğumuzu tutan state
  const [page, setPage] = useState(1);
  return (
    <div className="bg-[rgba(15,_83,_50,_0.5)] min-h-screen">
      <StatusBar />
      <Ellipses page={page} />
      <MainContent page={page} setPage={setPage} />
      <BottomBar current="getStarted" />
    </div>
  );
};
export default GetStarted;
