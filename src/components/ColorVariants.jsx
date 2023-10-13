import React from "react";
import "../styles/colorVariants.css";

const ColorVariants = ({ colors, dummyFn, ...props }) => {
  let variant_image;

  const changeVariantImage = (btn_id) => {
    //use ID of the object that already contains both color and image.
    //As we see, we only want the image of the respective variant. Therefore, we use search algortithm to filter out the object based on the ID 
  //that we have fetched using onMouseEnter event. Considering that filter method is an array method therefore 
    variant_image = colors
      .filter((colorObject) => colorObject.id === btn_id)[0].image;
      dummyFn(variant_image)
    };

  console.log("variant_image", variant_image);
  if (colors.length > 0) {
    const abc = colors.map((color, index) => (
      <div
        key={index}
        className="variant_wrapper"
        id={`${color.id}`}
        onMouseEnter={() => changeVariantImage(color.id)}
      >
        <div
          className="variant"
          style={{ backgroundColor: `${color.color_code}` }}
        ></div>
      </div>
    ));

    return <div className="variants">{abc}</div>;
  }
};

export default ColorVariants;
