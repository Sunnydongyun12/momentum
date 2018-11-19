import React from 'react';
import PCardList from 'components/PCardList';
import TagList from 'components/TagList';
import styled from 'styled-components';

const Content = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 130px 1fr;
  padding: 0 40px;
`;

const FilterSidebar = styled.div`
  display: grid;
  position: sticky;
  height: 5px;
  top: calc(50px + 2em); /* topNavHeight */
  box-sizing: border-box;
  grid-template-rows: auto 1fr;
`;

const ListView = styled.div`
  background: $eggshell;
  margin-bottom: 200px;
`;

export const SolutionList = () => {
  return (
    <Content>

      <FilterSidebar>
        <h1 style={{ margin: '0' }}>Matching Storage Providers</h1>
        <div>
          <TagList filters={['5x5', '10x10', 'Summer', 'Winter']} />
        </div>
      </FilterSidebar>

      <ListView>
        <PCardList />
        <PCardList />
        <PCardList />
      </ListView>

    </Content>
  );
};

export default SolutionList;
