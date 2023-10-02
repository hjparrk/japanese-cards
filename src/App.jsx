import { Fragment } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import HiraganaCards from "./Page/HiraganaCards";
import KatakanaCards from "./Page/KatakanaCards";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiragana" element={<HiraganaCards />} />
        <Route path="/katakana" element={<KatakanaCards />} />
      </Routes>
    </Fragment>
  );
}

export default App;
