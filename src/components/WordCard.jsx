import { useState } from "react";
import CardContent from "./CardContent";

/* eslint-disable react/prop-types */
const WordCard = (props) => {
  const { words } = props;
  const [num, setNum] = useState(0);

  return (
    <div className="w-full h-[60vh] flex flex-row gap-12 text-3xl items-center justify-center">
      <button
        className="w-14 h-14 rounded-lg bg-gray-200 hover:bg-sky-200"
        onClick={(e) => {
          e.preventDefault();
          if (num - 1 >= 0) {
            setNum(num - 1);
          }
        }}
      >
        {"<"}
      </button>
      <CardContent word={words[num]} num={num} />
      <button
        className="w-14 h-14 rounded-lg bg-gray-200 hover:bg-sky-200"
        onClick={(e) => {
          e.preventDefault();
          if (num + 1 < words.length) {
            setNum(num + 1);
          }
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default WordCard;
