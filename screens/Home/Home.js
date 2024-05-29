import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Sare Beyza'} type={1} />
      <Header title={'Sare Beyza'} type={2} />
      <Header title={'Sare Beyza'} type={3} />
    </SafeAreaView>
  );
};

export default Home;
