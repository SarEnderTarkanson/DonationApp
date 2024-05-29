import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Sare Beyza'} type={1} />
      <Button
        title="Donate"
        onPress={() => {
          console.log('you just pressed me');
        }}
      />
      <Button title="Donate" isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
