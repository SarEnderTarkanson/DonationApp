import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'A'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
