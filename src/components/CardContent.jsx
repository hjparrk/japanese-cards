import { useState } from "react";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const CardContent = (props) => {
  const { word, num } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [num]);

  return (
    <div className="flex flex-col gap-5 w-32 h-[20vh] items-center justify-start">
      <h1 className="text-8xl p-3">{word.japanese}</h1>
      {!show && (
        <button
          className="text-base"
          onClick={(e) => {
            e.preventDefault();
            setShow(true);
          }}
        >
          Show Answer
        </button>
      )}
      {show && <h1 className="text-3xl">{word.romanised}</h1>}
    </div>
  );
};

export default CardContent;
