import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import LayoutComp from '../../components/common/Layout';
import HeaderComp from '../../components/common/header';
import CardComp from '../../components/common/cards';
import InputComp from '../../components/common/input';
import {study} from '../../constant';

const StudyScreen = () => {
  const [text, setText] = useState('');
  return (
    <LayoutComp>
      <HeaderComp title="Study Material" />
      <View>
        <InputComp
          placeholder="Search topic"
          label="Search topic"
          value={text}
          onChange={(t: string) => setText(t)}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComp data={study} />
      </ScrollView>
    </LayoutComp>
  );
};

export default StudyScreen;

const styles = StyleSheet.create({});
