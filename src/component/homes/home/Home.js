import {
  IoIosHeart,
  IoMdPin,
  IoIosMale,
  IoMdExpand,
  IoIosKey,
} from "react-icons/io";
const home = (props) => {
  return (
    <div className="home">
      <img src={props.srcImg} alt="House 1" className="home__img" />
      <IoIosHeart className="home__like" />
      <h5 className="home__name">{props.name}</h5>
      <div className="home__location">
        <IoMdPin className="icon-homes" />
        <p>{props.location}</p>
      </div>
      <div className="home__rooms">
        <IoIosMale className="icon-homes" />
        <p>{props.rooms}</p>
      </div>
      <div className="home__area">
        <IoMdExpand className="icon-homes" />
        <p>
          {props.expandsMiter}
          <sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <IoIosKey className="icon-homes" />
        <p>${props.price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
    </div>
  );
};
export default home;
