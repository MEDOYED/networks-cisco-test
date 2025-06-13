import { useState } from "react";

import Header from "../widgets/Header/Header";
import SearchBar from "../widgets/SearchBar/SearchBar";
import PageHome from "../pages/PageHome/PageHome";

import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  console.log(inputValue);

  return (
    <div className="container">
      <Header />
      <SearchBar setInputValue={setInputValue} />
      <PageHome inputValue={inputValue} />
    </div>
  );
}

export default App;
