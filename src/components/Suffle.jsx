const Suffle = (words) => {
  let currentIndex = words.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [words[currentIndex], words[randomIndex]] = [
      words[randomIndex],
      words[currentIndex],
    ];
  }

  return words;
};

export default Suffle;
