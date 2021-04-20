import React from 'react';
import './Feature.scss';
import { IoIosGlobe } from 'react-icons/io';

const feature = props => {
  return (
    <div className="feature">
      <IoIosGlobe className="feature__icon" />
      <h4 className="heading-4 heading-4--dark">{props.title}</h4>
      <p className="feature__text">{props.content}</p>
    </div>
  );
};
export default feature;
