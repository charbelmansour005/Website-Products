import React, { useState } from "react";

function Card({ name, price }) {
  return (
    <div>
      <div>
        <h3>something</h3>
      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <h4>${price}</h4>
    </div>
  );
}

export default Card;
