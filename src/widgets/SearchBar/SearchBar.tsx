import "./SearchBar.scss";

type Props = {
  // inputValue: string;
  setInputValue: (value: string) => void;
};

const SearchBar = ({ setInputValue }: Props) => {
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input className="search-bar" type="text" onChange={onHandleInputChange} />
    </>
  );
};

export default SearchBar;
