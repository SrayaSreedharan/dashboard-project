import React from "react";
import cat from '../images/cat.png'
import dog from '../images/dog.png'
import Petcard from "./Petcard";

const Petcardgroup = () => {
  const Data = [
  {
    type: "Cat",
    count: 100,
    revenue: 2354,
    image: cat,
    bgColorClass: "#14A15F",
    hasimg: true,
    iconclr:'#14A15F'
  },
  {
    type: "Dog",
    count: 100,
    revenue: 2354,
    image: dog,
    bgColorClass: "blue",
    hasimg: true,
    iconclr:'blue'
  },
  {
    type: "Other Pets",
    count: 100,
    revenue: 2354,
    bgColorClass: "#14A15F",
    hasimg: false,
    iconclr:'#14A15F'
  },
];

  return (
    <div className="card-grp" style={{ display: "flex", flexWrap: "wrap", }}>
      {Data.map((campaign, index) => (
        <Petcard  key={index} {...campaign} />
      ))}
    </div>
  );
};

export default Petcardgroup;
