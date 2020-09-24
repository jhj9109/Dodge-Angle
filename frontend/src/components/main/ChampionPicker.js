import React from 'react';
import styled from 'styled-components';
import ChampionInputContainer from '../../containers/main/ChampionInputContainer';
import ChampionItemContainer from '../../containers/main/ChampionItemContainer';
import palette from '../../lib/styles/palette';

const ChampionPickerBlock = styled.div`
  height: 100%;
  background: ${palette.grape[3]};
`;

const ChampionListBlock = styled.div`
  height: 700px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 150px;
  gap: 1rem;
  overflow: auto;
`;

const ChampionList = ({
  resultChampions,
  selectedChampion,
  setSelectedChampion,
}) => {
  return (
    <ChampionListBlock>
      {resultChampions.map((champion) => (
        <ChampionItemContainer
          key={champion.id}
          champion={champion}
          isSelected={
            selectedChampion ? selectedChampion.id === champion.id : false
          }
          setSelectedChampion={setSelectedChampion}
        />
      ))}
    </ChampionListBlock>
  );
};

const ChampionPicker = ({
  allChampions,
  resultChampions,
  setResultChampions,
  selectedChampion,
  setSelectedChampion,
}) => {
  return (
    <ChampionPickerBlock>
      <ChampionInputContainer
        allChampions={allChampions}
        setResultChampions={setResultChampions}
      />
      <ChampionList
        resultChampions={resultChampions}
        selectedChampion={selectedChampion}
        setSelectedChampion={setSelectedChampion}
      />
    </ChampionPickerBlock>
  );
};

export default ChampionPicker;
