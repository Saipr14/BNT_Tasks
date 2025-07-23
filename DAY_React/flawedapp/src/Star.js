import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleClick = (idx) => setRating(idx);
  const handleReset = () => setRating(0);

  return (
    <div>
      <h1>Star Rating</h1>
      <div style={{ fontSize: 32, marginBottom: 10 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            style={{ color: i <= rating ? "gold" : "#ccc", cursor: "pointer" }}
            onClick={() => handleClick(i)}
          >
            ★
          </span>
        ))}
      </div>
      <div>
        <b>Selected Stars:</b> {rating}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StarRating