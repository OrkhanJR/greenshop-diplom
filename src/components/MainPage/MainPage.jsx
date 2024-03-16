import Header from "../SharedComponents/Header/Header";
import "./MainPage.scss";
import HeroPart from "./MainPageComponents/HeroPart/HeroPart";
const MainPage = () => {
  return (
    <>
      <div className="mainpage-wrapper">
        <Header />
        <HeroPart />
      </div>
    </>
  );
};

export default MainPage;
