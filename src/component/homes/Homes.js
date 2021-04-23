import image from "../../assets/exportImg";
import Home from "./home/Home";
import "./Homes.scss";

const arrHomes = [
  {
    srcImg: image.house1,
    name: "Beautiful Familiy House",
    location: "USA",
    rooms: "5 rooms",
    expandsMiter: "325 m",
    price: "1,200,000",
  },
  {
    srcImg: image.house2,
    name: "Modern Glass Villa",
    location: "Canada",
    rooms: "6 rooms",
    expandsMiter: "450 m",
    price: "2,750,000",
  },
  {
    srcImg: image.house3,
    name: "Cozy Country House",
    location: "UK",
    rooms: "4 rooms ",
    expandsMiter: "250 m",
    price: "850,000",
  },
  {
    srcImg: image.house4,
    name: "Large Rustical Villa",
    location: "Portugal",
    rooms: "6 rooms",
    expandsMiter: "480 m",
    price: "1,950,000",
  },
  {
    srcImg: image.house5,
    name: "Majestic Palace House",
    location: "Germany",
    rooms: "18 rooms",
    expandsMiter: "4230 m",
    price: "9,500,000",
  },
  {
    srcImg: image.house6,
    name: "Modern Familiy Apartment",
    location: "Italy",
    rooms: "3 rooms",
    expandsMiter: "180 m",
    price: "600,000",
  },
];
const homes = () => {
  return (
    <div className="Homes">
      {arrHomes.map((home, index) => (
        <Home
          key={`home${index}`}
          srcImg={home.srcImg}
          name={home.name}
          location={home.location}
          rooms={home.rooms}
          expandsMiter={home.expandsMiter}
          price={home.price}
        />
      ))}
    </div>
  );
};
export default homes;
