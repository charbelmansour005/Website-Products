import React, { useState } from "react";

function Card({ name, price }) {
  return (
    <div style={{ margin: "2.5%" }}>
      <div class="img-inner1">
        <div class="inner-skew1">
          <img src="https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?w=2000&t=st=1659168474~exp=1659169074~hmac=af5adceab73fb7be5063d2503e91781af6777e4300a3659e3003e7a17d02ef39" />
        </div>
      </div>
      <div class="text-container1">
        <h4 style={{ fontSize: "0.6vw" }}>{name}</h4>
        <h5 style={{ marginTop: "1vh", fontSize: "0.55vw" }}>
          Current Price:{price}{" "}
        </h5>
        <button
          style={{
            marginTop: "1.5vh",
            padding: 7,
            borderRadius: 6,
            cursor: "pointer",
            borderColor: "white",
          }}
        >
          <h4 style={{ fontWeight: "normal" }}>Edit price </h4>
        </button>
        <button
          style={{
            marginTop: "6%",
            padding: 7,
            borderRadius: 6,
            cursor: "pointer",
            borderColor: "white",
          }}
        >
          <h4 style={{ fontWeight: "normal" }}>Delete</h4>
        </button>
        <button
          style={{
            marginTop: "2%",
            padding: 7,
            borderRadius: 6,
            cursor: "pointer",
            borderColor: "white",
          }}
        >
          <h4 style={{ fontWeight: "normal" }}>Photo</h4>
        </button>
      </div>
    </div>
  );
}

export default Card;
