import "./Footer.scss";
import FooterNav from "./FooterNav/footerNav";

const arrNav = [
  {
    title: "Find your dream home",
  },
  {
    title: "Request proposal",
  },
  {
    title: "Download home planner",
  },
  {
    title: "Contact us",
  },
  {
    title: "Submit your property",
  },
  {
    title: "Come work with us!",
  },
];
const footer = () => {
  return (
    <footer className="Footer">
      <ul className="nav">
        {arrNav.map((nav, index) => (
          <FooterNav key={`nav${index}`} title={nav.title} />
        ))}
      </ul>
      <p className="copyright">
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this
        project for your own purposes. This does NOT apply if you plan to
        produce your own course or tutorials based on this project.
      </p>
    </footer>
  );
};
export default footer;
