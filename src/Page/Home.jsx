import { Fragment, useState } from "react";
import { Navigation } from "../components/Navigation";
import { hiragana } from "../components/Hiragana";
import { katakana } from "../components/Katakana";

const Home = () => {
  const [isHiragana, setIsHiragana] = useState(true);

  return (
    <Fragment>
      <div className="flex flex-col gap-12 items-center justify-center">
        <Navigation />
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="text-3xl font-bold">Japanese</h1>
          <button
            className="p-2 bg-gray-200 rounded-lg hover:bg-sky-200"
            onClick={() => {
              setIsHiragana(!isHiragana);
            }}
          >
            {isHiragana ? "Switch to Katakana" : "Switch to Hiragana"}
          </button>
        </div>
        {isHiragana ? (
          <div className="grid grid-cols-5 gap-8">
            {hiragana.map((line) => {
              return line.map((word) => {
                return (
                  <div
                    className={
                      word.japanese === ""
                        ? ""
                        : "flex flex-col gap-3 w-32 p-3 justify-between border border-black rounded-lg hover:bg-sky-200 transform transition duration-300 hover:scale-110"
                    }
                    key={word.japanese + word.romanised}
                  >
                    <h1 className="text-3xl">{word.japanese}</h1>
                    <h1 className="text-md">
                      {word.japanese === "" ? "" : word.romanised}
                    </h1>
                  </div>
                );
              });
            })}
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-8">
            {katakana.map((line) => {
              return line.map((word) => {
                return (
                  <div
                    className={
                      word.japanese === ""
                        ? ""
                        : "flex flex-col gap-3 w-32 p-3 justify-between border border-black rounded-lg hover:bg-sky-200 transform transition duration-300 hover:scale-110"
                    }
                    key={word.japanese + word.romanised}
                  >
                    <h1 className="text-3xl">{word.japanese}</h1>
                    <h1 className="text-md">
                      {word.japanese === "" ? "" : word.romanised}
                    </h1>
                  </div>
                );
              });
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
