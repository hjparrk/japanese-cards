import { Fragment, useState } from "react";
import { Navigation } from "../components/Navigation";
import SuffledWords from "../components/SuffledWords";
import WordCard from "../components/WordCard";
import { useNavigate } from "react-router-dom";

const KatakanaCards = () => {
  const [suffledWords] = useState(SuffledWords(false));

  const navigation = useNavigate();
  return (
    <Fragment>
      <div className="flex flex-col gap-12 items-center justify-center">
        <Navigation />
        <div>
          <button
            className="text-xl p-2 rounded-lg bg-gray-200 hover:bg-sky-200"
            onClick={() => {
              navigation(0);
            }}
          >
            Suffle Cards
          </button>
          <WordCard words={suffledWords} />
        </div>
      </div>
    </Fragment>
  );
};

export default KatakanaCards;
