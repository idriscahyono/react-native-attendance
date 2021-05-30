import {Button} from '@ui-kitten/components';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import {PenciIcon} from '../assets/icons';
import ImageProfile from '../assets/images/profile.jpg';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={{fontFamily: 'Nunito-Bold', fontSize: 32}}>Sign Up</Text>
      <View style={styles.containerProfile}>
        <Image
          source={ImageProfile}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={styles.containerIcon}>
          <PenciIcon width={17} height={17} />
        </View>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.textHeaderInput}>Username</Text>
        <CustomInput inputStyle={{fontFamily: 'Nunito-Bold'}} />
        <View style={styles.space(22)} />
        <Text style={styles.textHeaderInput}>Fullname</Text>
        <CustomInput inputStyle={{fontFamily: 'Nunito-Bold'}} />
        <View style={styles.space(22)} />
        <Text style={styles.textHeaderInput}>Email</Text>
        <CustomInput inputStyle={{fontFamily: 'Nunito-Bold'}} />
        <View style={styles.space(22)} />
        <Text style={styles.textHeaderInput}>Password</Text>
        <CustomInput
          secureTextEntry={true}
          inputStyle={{fontFamily: 'Nunito-Bold'}}
        />
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Verification')}>
        Sign Up
      </Button>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{fontFamily: 'Nunito-Regular', right: 8}}>
          Have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontFamily: 'Nunito-Regular', color: '#FFB951'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  containerProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 25,
  },
  containerIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#003F5A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 4,
    right: 0,
  },
  containerInput: {
    width: '82%',
    marginTop: 25,
  },
  textHeaderInput: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#C4C4C4',
  },
  button: {
    marginTop: 50,
    width: '72%',
    backgroundColor: '#003F5A',
    borderColor: 'transparent',
    borderRadius: 10,
  },
  space: value => {
    return {
      height: value,
    };
  },
});
