import image from "../../assets/exportImg";
import Realtor from "./realtor/realtor";
const arrRealtor = [
  {
    srcImage: image.realtor1,
    alt: "Realtor 1",
    name: "Erik Feinman",
    review: "245 houses sold",
  },
  {
    srcImage: image.realtor2,
    alt: "Realtor 2",
    name: "Kim Brown",
    review: "212 houses sold",
  },
  {
    srcImage: image.realtor3,
    alt: "Realtor 3",
    name: "Toby Ramsey",
    review: "198 houses sold",
  },
];
const RealTors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        {arrRealtor.map((realtor, index) => (
          <Realtor
            key={`realtor${index}`}
            srcImage={realtor.srcImage}
            alt={realtor.alt}
            name={realtor.name}
            review={realtor.review}
          />
        ))}
      </div>
    </div>
  );
};
export default RealTors;
