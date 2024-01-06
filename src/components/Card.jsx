import React from "react";
import Star from "/public/assets/Star 1.png";
const Card = (props) => {
  let badge;
  let styles;
  if (props.openSpot === 0) {
    badge = "SOLD OUT";
  } else if (props.location === "Online") {
    badge = "Online";
    styles = {
      backgroundColor: "green",
      color: "white",
    };
  }
  return (
    <div className="relative">
      <div
        className="absolute text-black bg-white rounded px-2 text-bold top-2 left-2"
        style={styles}
      >
        {badge}
      </div>

      <img
        src={`/public/assets/${props.img}`}
        alt={props.title}
        className=" rounded-md "
      />
      <div className="inline-block text-sm py-2">
        <div className="flex items-center gap-2">
          <img src={Star} alt="" className="w-4 h-4 rounded" />
          <p>{props.rating}</p>
          <span className="text-gray-500">
            {" "}
            ({props.reviewCount}) • {props.location}
          </span>
        </div>
        <div>
          <p> {props.title}</p>
          <p className="font-bold">
            From ${props.price}
            <span className="font-normal text-gray-500"> / person</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
