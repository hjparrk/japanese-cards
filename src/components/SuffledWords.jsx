/* eslint-disable react/prop-types */
import { hiragana } from "./Hiragana";
import { katakana } from "./Katakana";
import Suffle from "./Suffle";

const SuffledWords = (isHiragana) => {
  const words = [];

  if (isHiragana) {
    hiragana.forEach((arr) => {
      arr.forEach((word) => {
        if (word.japanese !== "") {
          words.push(word);
        }
      });
    });
  } else {
    katakana.forEach((arr) => {
      arr.forEach((word) => {
        if (word.japanese !== "") {
          words.push(word);
        }
      });
    });
  }

  const suffledWords = Suffle(words);

  return suffledWords;
};

export default SuffledWords;
