"use client";
import { useState } from "react";
export default function home() {
  <div>
    <h1>Reviews</h1>
    <ItemContainer />
  </div>;
}

const ItemContainer = () => {
  <div>
    <img src={img} />
    <div>
      <button>&lt;</button>
      <div>
        <h2>{ner}</h2>
        <h3>{statusS}</h3>
      </div>
      <button>&gt;</button>
    </div>
    <div>{content}</div>
  </div>;
};

const Items = [
  {
    id: 1,
    img: "",
    ner: "",
    statusS: "",
    content: "",
  },
];
