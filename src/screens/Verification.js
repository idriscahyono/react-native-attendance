import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import CustomInputRound from '../components/CustomInputRound';

const Verification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Nunito-Bold', fontSize: 32, marginTop: 20}}>
        Verification
      </Text>
      <Text
        style={{
          fontFamily: 'Nunito-ExtraLight',
          fontSize: 15,
          marginTop: 8,
          width: '80%',
          textAlign: 'center',
        }}>
        Enter the 4 digit verification code that has sent to your email
      </Text>
      <View style={{flexDirection: 'row', marginTop: 28}}>
        <CustomInputRound />
        <CustomInputRound />
        <CustomInputRound />
        <CustomInputRound />
      </View>
      <View style={{flexDirection: 'row', marginTop: 35}}>
        <Text style={{fontFamily: 'Nunito-Regular', right: 8}}>
          code expires in:
        </Text>
        <Text style={{fontFamily: 'Nunito-Regular', color: '#FFB951'}}>
          03:12
        </Text>
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        Continue
      </Button>
      <View style={{flexDirection: 'row', marginTop: 32}}>
        <Text style={{fontFamily: 'Nunito-Regular', right: 8}}>
          Don't receive any code?
        </Text>
        <Text style={{fontFamily: 'Nunito-Regular', color: '#FFB951'}}>
          Resend Code
        </Text>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    width: '72%',
    backgroundColor: '#003F5A',
    borderColor: 'transparent',
    borderRadius: 10,
  },
});
