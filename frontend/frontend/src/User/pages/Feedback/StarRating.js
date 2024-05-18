import React, { useState } from "react";

function StarRating({ onChange, value }) {
  const [rating, setRating] = useState(value || 0);

  const handleClick = (index) => {
    setRating(index + 1);
    if (onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{ cursor: "pointer", color: index < rating ? "gold" : "gray" , fontSize: "24px"}}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
