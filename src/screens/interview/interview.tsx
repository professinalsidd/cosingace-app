import {ScrollView} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import HeaderComp from '../../components/common/header';
import CardComp from '../../components/common/cards';
import {interview} from '../../constant';

const InterviewScreen = () => {
  return (
    <LayoutComp>
      <HeaderComp title="Interview Questions" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComp data={interview} />
      </ScrollView>
    </LayoutComp>
  );
};

export default InterviewScreen;
