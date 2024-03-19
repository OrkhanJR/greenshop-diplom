import PlantCard1 from "../../../../../assets/Images/PlantCards/LeftCardImage.png";
import PlantCard2 from "../../../../../assets/Images/PlantCards/RightCardImage.png";
import arrow from "../../../../../assets/Images/PlantCards/Arrow - Right.svg";
const PlantCards = () => {
  const cards = [
    {
      image: PlantCard1,
      header: "Summer cactus & succulents",
      title:
        "We are an online plant shop offering a wide range of cheap and trendy plants",
    },
    {
      image: PlantCard2,
      header: "Styling Trends & much more",
      title: "Spruce up your space with our affordable and stylish plants.",
    },
  ];

  return (
    <div className="card-wrapper">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={card.image} alt="" />
          </div>
          <div className="right-side">
            <div className="card-header">
              <span>{card.header}</span>
            </div>
            <div className="card-main">
              <span>{card.title}</span>
            </div>
            <button className="card-button">
              Find More <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantCards;
