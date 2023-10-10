

import React, { useState } from "react";
import Shoe1 from "../assets/shoes1.png";
import Shoe2 from "../assets/shoes2.png";
import Shoe3 from "../assets/shoes3.png";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const data = [
    { src: Shoe1, color: "blue" },
    { src: Shoe2, color: "red" },
    { src: Shoe3, color: "white" },
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };


  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-gray-900 space-y-5">
      <div className={`bg-${selectedColor}-200 p-4 rounded-lg`}>
        {/* Display the selected color image */}
        <img
          src={data.find((item) => item.color === selectedColor)?.src || ""}
          alt={`Product in ${selectedColor}`}
          className="w-72 h-auto"
        />
      </div>
      <div className=" w-full flex justify-center items-center">
        {/* Color options */}
        <div className="flex space-x-2">
          {data.map((item) => (
            <div
              key={item.color}
              style={{ width: "2.5rem", height: "2.5rem", backgroundColor: item.color, borderRadius: "50%",
                border: `2px solid ${
                  selectedColor === item.color
                    ? `${item.color}`
                    : "transparent"
                }`,
                boxShadow: `${ selectedColor === item.color ? "0 0 0 3px white" : "none"}`,
                cursor: "pointer",
                marginBottom: '.7rem',
              }}
              onClick={() => handleColorClick(item.color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
