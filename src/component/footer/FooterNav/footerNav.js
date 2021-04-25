const footerNav = (props) => {
  return (
    <li class="nav__item">
      <a href="/#" class="nav__link">
        {props.title}
      </a>
    </li>
  );
};
export default footerNav;
