import React from 'react';
// import CTABtn from "components/CTABtn";
import '../styles/SolutionList.css';
import PCardList from 'components/PCardList';
import FilterTags from 'components/FilterTags';

export const SolutionList = () => {
  return (
    <div className="SolutionList__content">
      <div className="SolutionList__filter">
        <h1 style={{ margin: '0' }}>Matching Storage Providers</h1>
        <div>
          <FilterTags filters={['5x5', '10x10']} />
        </div>
      </div>
      <PCardList />
    </div>
  );
};

export default SolutionList;
