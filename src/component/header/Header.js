import image from "../../assets/exportImg";
const Header = () => {
  return (
    <div className="header">
      <img src={image.logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">As Seen on</div>

      <div className="header__seenon-logos">
        <img src={image.logoBBC} alt="Logo BBC" className="" />
        <img src={image.logoForbes} alt="Logo Forbes" className="" />
        <img src={image.logoTechcrunch} alt="Logo Techcrunch" className="" />
        <img src={image.logoBi} alt="Logo Bi" className="" />
      </div>
    </div>
  );
};
export default Header;
