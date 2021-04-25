import image from "../../../assets/exportImg";
const storyPictures = () => {
  return (
    <div className="StoryPictures">
      {/* </div><img src="img/story-1.jpeg" alt="Couple with new house" class="story__img--1"> */}

      <img
        src={image.story1}
        alt="Couple with new house"
        class="story__img--1"
      />
      <img src={image.story2} alt="New house" class="story__img--2" />
    </div>
  );
};
export default storyPictures;
