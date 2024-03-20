import GardenCare from "../../../assets/Images/footer/gardencare.png";
import PlantRenovation from "../../../assets/Images/footer/plantrenovation.png";
import WateringGarden from "../../../assets/Images/footer/watering.png";
import Logo from "../../../assets/Images/Logo/Logo.svg";
import Address from "../../../assets/Images/footer/Location.png";
import Mail from "../../../assets/Images/footer/Mail.png";
import Phone from "../../../assets/Images/footer/Number.png";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="icon-boxes">
          <div className="icon">
            <div className="img">
              <img src={GardenCare} alt="icon" />
            </div>
            <div className="title">Garden Care</div>
            <span>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </span>
          </div>
          <div className="icon">
            <div className="img">
              <img src={PlantRenovation} alt="icon" />
            </div>
            <div className="title">Plant Renovation</div>
            <span>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </span>
          </div>
          <div className="icon">
            <div className="img">
              <img src={WateringGarden} alt="icon" />
            </div>
            <div className="title">Watering Garden</div>
            <span>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </span>
          </div>
        </div>
        <div className="contacts-wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="contacts ">
            <img src={Address} alt="Adress" />
            70 West Buckingham Ave. Farmingdale, NY 11735
          </div>
          <div className="contacts">
            <img src={Mail} alt="mail" />
            <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
          </div>
          <div className="contacts">
            <img src={Phone} alt="number" />
            <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </>
  );
};
export default Footer;
