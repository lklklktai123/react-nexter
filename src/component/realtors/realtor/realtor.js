import React from "react";

const realtor = (props) => {
  return (
    <React.Fragment>
      <img src={props.srcImage} alt={props.alt} class="realtors__img" />
      <div class="realtors__details">
        <h4 class="heading-4 heading-4--light">{props.name}</h4>
        <p class="realtors__sold">{props.review}</p>
      </div>
    </React.Fragment>
  );
};
export default realtor;
