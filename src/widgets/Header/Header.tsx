import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/piksa"}>PiKSA</Link>
        </li>
        <li>
          <Link to={"/prog-funk"}>Prog. Funk.</Link>
        </li>
        <li>
          <Link to={"/jipp"}>JiPP</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
