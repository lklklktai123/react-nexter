import "./gallery.scss";
const gallery = (props) => {
  return (
    <figure className={`gallery__item gallery__item--${props.stt}`}>
      <img
        src={props.srcImage}
        alt={`Gallery${props.stt}`}
        className="gallery__img"
      />
    </figure>
  );
};
export default gallery;
