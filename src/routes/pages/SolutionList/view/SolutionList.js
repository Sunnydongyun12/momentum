import React from 'react';
// import CTABtn from "components/CTABtn";
import '../styles/SolutionList.css';
import PCardList from 'components/PCardList';
import TagList from 'components/TagList';

export const SolutionList = () => {
  return (
    <div className="SolutionList">
      <div className="SolutionList__filter">
        <h1 style={{ margin: '0' }}>Matching Storage Providers</h1>
        <div>
          <TagList filters={['5x5', '10x10', 'Summer', 'Winter']} />
        </div>
      </div>
      <div className="SolutionList__content">
        <PCardList />
        <PCardList />
        <PCardList />
      </div>
    </div>
  );
};

export default SolutionList;
