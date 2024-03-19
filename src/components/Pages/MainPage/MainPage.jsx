import Header from "../../SharedComponents/Header/Header";
import "./MainPage.scss";
import HeroPart from "./MainPageComponents/HeroPart/HeroPart"
import PlantCards from "./MainPageComponents/PlantCards/PlantCards";
import ProductsPart from "./MainPageComponents/ProductsPart/ProductsPart";
const MainPage = () => {
  return (
    <>
      <div className="mainpage-wrapper">
        <Header />
        <HeroPart />
        <ProductsPart />
        <PlantCards />
      </div>
    </>
  );
};

export default MainPage;
