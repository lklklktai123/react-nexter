import React from 'react';
import StoryContent from './StoryContent/StoryContent';
import StoryPictures from './StoryPictures/StoryPictures';
const stories = () => {
  return (
    <React.Fragment>
      <StoryPictures />
      <StoryContent />
    </React.Fragment>
  );
};
export default stories;
