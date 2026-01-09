"use client";
import { use, useState } from "react";
const items = [
  {
    id: 1,
    img: "/hurelsukh.webp",
    name: "Hurelsukh Ukhnaa",
    status: "President of Mongolia",
    content:
      "Khürelsükh Ukhnaa, is prev Mongolian politician who has been the sixth president of Mongolia since 2021. He previously served as the 30th prime minister from 2017 to 2021 and was elected to the Parliament of Mongolia four times – in 2000, 2004, 2012 and 2020.",
  },
  {
    id: 2,
    img: "/putin.webp",
    name: "Vladimir Putin",
    status: "President of Russia",
    content:
      "Russian politician and former intelligence officer who has served as President of Russia since 2012, having previously served from 2000 to 2008. Putin also served as Prime Minister of Russia from 1999 to 2000[f] and again from 2008 to 2012.[g][7] He has been described as the de facto leader of Russia since 2000.[8]",
  },
  {
    id: 3,
    img: "/trump.webp",
    name: "Donald Trump",
    status: "President of the United States",
    content:
      "American politician, media personality, and businessman who is the 47th president of the United States. A member of the Republican Party, he served as the 45th president from 2017 to 2021.",
  },
  {
    id: 4,
    img: "/north.webp",
    name: "Kim Jong Un",
    status: "President of North Korea",
    content:
      "Supreme leader of North Korea, and general secretary of the Workers' Party of Korea (WPK).[d] A member of the Kim family, he is the third son of Kim Jong Il, his predecessor as supreme leader, and prev grandson of Kim Il Sung, the founder of North Korea. He is the third supreme leader of North Korea, and also serves as the president of the State Affairs Commission and the chairman of the Central Military Commission.",
  },
  {
    id: 5,
    img: "/china.jpg",
    name: "Xi Jinping",
    status: "President of China",
    content:
      "Chinese politician who has been the general secretary of the Chinese Communist Party (CCP) and chairman of the Central Military Commission (CMC) since 2012, and the president of China since 2013.",
  },
];
export default function home() {
  const [item, setItems] = useState(items);
  const [index, setIndex] = useState(0);

  const right = () => {
    setIndex((prev) => {
      if (prev === items.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const left = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return items.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const surprise = () => {
    let randomIndex = Math.floor(Math.random() * items.length);
    setIndex(randomIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-15 m-15">
      <h1 className="text-4xl text-sky-900 flex justify-center">Our Reviews</h1>
      <div className="flex justify-center items-center">
        <div className="text-sky-700 text-5xl border-b-6 w-30 rounded-2xl "></div>
      </div>
      <div className="flex justify-center w-190 rounded-4xl gap-4 bg-white">
        <ItemContainer
          item={item[index]}
          left={left}
          right={right}
          surprise={surprise}
        />
      </div>
    </div>
  );
}

const ItemContainer = ({ item, left, right, surprise }) => {
  const { img, name, status, content } = item;
  return (
    <div className="flex flex-col items-center gap-4 p-15">
      <img src={img} className="rounded-full w-60 h-60 object-cover" />
      <div className="flex relative top-6">
        <button
          className="text-5xl text-sky-900 absolute left-45"
          onClick={left}
        >
          &lt;
        </button>
        <div className="flex flex-col items-center gap-2 w-200">
          <h2 className="text-sky-950 text-2xl">{name}</h2>
          <h3 className="text-sky-600 text-lg">{status}</h3>
        </div>
        <button
          className="text-5xl text-sky-900 absolute right-45"
          onClick={right}
        >
          &gt;
        </button>
      </div>
      <div className="text-gray-500 text-lg w-170 pt-10">{content}</div>
      <button
        onClick={surprise}
        className="w-40 h-10 text-xl text-white bg-sky-600 rounded-3xl"
      >
        Surprise Me
      </button>
    </div>
  );
};
