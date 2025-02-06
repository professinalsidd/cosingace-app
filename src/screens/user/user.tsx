import {ScrollView} from 'react-native';
import React from 'react';
import LayoutComp from '../../components/common/Layout';
import HeaderComp from '../../components/common/header';
import InputComp from '../../components/common/input';

const UserScreen = () => {
  return (
    <LayoutComp>
      <HeaderComp title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputComp label="Full Name" readOnly />
        <InputComp label="Email Address" readOnly />
        <InputComp label="Phone Number" readOnly />
        <InputComp label="Date of birth" readOnly />
        <InputComp label="Select Gender" readOnly />
        <InputComp label="Class Join Time" readOnly />
        <InputComp label="Role" readOnly />
        <InputComp label="Address" readOnly />
      </ScrollView>
    </LayoutComp>
  );
};

export default UserScreen;
