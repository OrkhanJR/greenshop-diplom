import Slider from "react-slick";
import slide_1_plant from "../../../../../assets/Images/HeroPart/slide1.png";
import slide_2_plant from "../../../../../assets/Images/HeroPart/product-1.png";
import slide_3_plant from "../../../../../assets/Images/HeroPart/product-7.png";
import "./HeroPart.scss";

const HeroPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slides = [
    {
      heroHeader: "Welcome to GreenShop",
      slogan: "Let's Make a",
      sloganText: "Better",
      planetColor: "PLANET",
      heroFooter:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",

      image: slide_1_plant,
    },
    {
      heroHeader: "Transform Your Space with Plants",
      slogan: "renew your home",
      sloganText: "with",
      planetColor: "greenery",
      heroFooter:
        "Plants not only add a touch of nature to your home, but also purify the air, reduce stress, and boost creativity. Explore our selection of plants to find the perfect ones for your space.",
      image: slide_2_plant,
    },
    {
      heroHeader: "Elevate Your Decor with Our Plants",
      slogan: "Enhance Your Life",
      sloganText: "with",
      planetColor: "Natural Beauty",
      heroFooter:
        "Our plants aren't just beautiful, they're also versatile. From modern to bohemian, our collection of plants can complement any decor style. Shop now to find the perfect plant for your space.",
      image: slide_3_plant,
    },
  ];

  return (
    <>
      <div className="wrap">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="hero-slide" key={index}>
              <div className="hero-wrapper">
                <div className="left-side">
                  <p className="hero-header">{slide.heroHeader}</p>
                  <div className="slogan">
                    {slide.slogan}
                    <p className="slogan-text">
                      {slide.sloganText}{" "}
                      <span id="planet-color">{slide.planetColor}</span>
                    </p>
                  </div>
                  <div className="hero-footer">{slide.heroFooter}</div>
                </div>
                <div className="right-side">
                  <picture>
                    <img src={slide.image} alt="plants" />
                  </picture>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroPart;
