import image from "../../assets/exportImg";
import Gallery from "./gallery/gallery";

const arrGallery = [
  {
    stt: 1,
    srcImage: image.gal1,
  },
  {
    stt: 2,
    srcImage: image.gal2,
  },
  {
    stt: 3,
    srcImage: image.gal3,
  },
  {
    stt: 4,
    srcImage: image.gal4,
  },
  {
    stt: 5,
    srcImage: image.gal5,
  },
  {
    stt: 6,
    srcImage: image.gal6,
  },
  {
    stt: 7,
    srcImage: image.gal7,
  },
  {
    stt: 8,
    srcImage: image.gal8,
  },
  {
    stt: 9,
    srcImage: image.gal9,
  },
  {
    stt: 10,
    srcImage: image.gal10,
  },
  {
    stt: 11,
    srcImage: image.gal11,
  },
  {
    stt: 12,
    srcImage: image.gal12,
  },
  {
    stt: 13,
    srcImage: image.gal13,
  },
  {
    stt: 14,
    srcImage: image.gal14,
  },
];
const galleries = () => {
  return (
    <div className="gallery">
      {arrGallery.map((gallery, index) => (
        <Gallery
          key={`Gallery${index}`}
          stt={gallery.stt}
          srcImage={gallery.srcImage}
        />
      ))}
    </div>
  );
};
export default galleries;
