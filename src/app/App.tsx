import { useState } from "react";

import PageHome from "../pages/PageHome/PageHome";
import SearchBar from "../widgets/SearchBar/SearchBar";

import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  console.log(inputValue);

  return (
    <div className="container">
      <SearchBar setInputValue={setInputValue} />
      <PageHome inputValue={inputValue} />
    </div>
  );
}

export default App;
