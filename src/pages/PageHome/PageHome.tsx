import SectionQuestions from "../../widgets/sections/SectionQuestions/SectionQuestions";

import "./PageHome.scss";

type Props = {
  inputValue: string;
};

const PageHome = ({ inputValue }: Props) => {
  return (
    <div className="page-home">
      <SectionQuestions inputValue={inputValue} />
    </div>
  );
};

export default PageHome;
