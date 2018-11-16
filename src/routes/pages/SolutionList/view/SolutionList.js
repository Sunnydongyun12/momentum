import React from 'react';
// import CTABtn from "components/CTABtn";
import '../styles/SolutionList.css';
import PCardList from 'components/PCardList';

export const SolutionList = () => {
  return (
    <div className="SolutionList__content">
      <h1>Matching Storage Providers</h1>
      <PCardList />
      {/* <CTABtn className="CTABtn--dark">test</CTABtn> */}
    </div>
  );
};

export default SolutionList;
