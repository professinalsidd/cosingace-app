import {ScrollView} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import HeaderComp from '../../components/common/header';
import CardComp from '../../components/common/cards';
import {game} from '../../constant';

const GameScreen = () => {
  return (
    <LayoutComp>
      <HeaderComp title="Game zone" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComp data={game} />
      </ScrollView>
    </LayoutComp>
  );
};

export default GameScreen;
