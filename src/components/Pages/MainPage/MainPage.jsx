import Header from "../../SharedComponents/Header/Header";
import "./MainPage.scss";
import HeroPart from "./MainPageComponents/HeroPart/HeroPart"
import ProductsPart from "./MainPageComponents/ProductsPart/ProductsPart";
const MainPage = () => {
  return (
    <>
      <div className="mainpage-wrapper">
        <Header />
        <HeroPart />
        <ProductsPart />
      </div>
    </>
  );
};

export default MainPage;
