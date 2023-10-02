import { Fragment } from "react";
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
    <Fragment>
      <div className="flex flex-col gap-5 w-32 h-[20vh] items-center pt-4">
        <div>
          <h1 className="text-8xl p-3">{word.japanese}</h1>
          <h1 className="text-sm">{`[ ${num + 1} / 46 ]`}</h1>
        </div>
        {!show && (
          <button
            className="text-lg"
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
    </Fragment>
  );
};

export default CardContent;
