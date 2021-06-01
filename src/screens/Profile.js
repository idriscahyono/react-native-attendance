import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import HeaderNavigation from '../components/HeaderNavigation';
import ImageProfile from '../assets/images/profile.jpg';
import {PenciIcon} from '../assets/icons';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderNavigation
        onBack={() => navigation.navigate('Dashboard')}
        name="Profile"
      />
      <View
        style={{
          height: '20%',
          borderBottomColor: '#D1D5DB',
          borderBottomWidth: 8,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 25,
            marginLeft: 25,
          }}>
          <Image
            source={ImageProfile}
            style={{width: 80, height: 80, borderRadius: 50}}
          />
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.text}>Idris Cahyono</Text>
            <Text style={styles.text}>Software Engineer</Text>
          </View>
          <View style={styles.containerIcon}>
            <PenciIcon width={17} height={17} />
          </View>
        </View>
      </View>
      <View
        style={{
          height: '10%',
          borderBottomColor: '#D1D5DB',
          borderBottomWidth: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            margin: 8,
            justifyContent: 'center',
            borderRightColor: '#D1D5DB',
            borderRightWidth: 3,
            marginLeft: 25,
          }}>
          <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
            Last Check In
          </Text>
          <Text style={{fontFamily: 'Nunito-Regular', fontSize: 14}}>
            Tuesday, 05-04-2021
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            margin: 8,
            marginLeft: 25,
          }}>
          <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
            Last Check Out
          </Text>
          <Text style={{fontFamily: 'Nunito-Regular', fontSize: 14}}>
            Friday, 05-04-2021
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '25%',
          borderBottomColor: '#D1D5DB',
          borderBottomWidth: 8,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#D1D5DB',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 25,
              marginLeft: 25,
            }}>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              Phone
            </Text>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              +6281-111-222-333
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#D1D5DB',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 25,
              marginLeft: 25,
            }}>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              Email
            </Text>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              email@idriscahyono.com
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#D1D5DB',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 25,
              marginLeft: 25,
            }}>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              Position
            </Text>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              Full-Time
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '20%',
          borderBottomColor: '#D1D5DB',
          borderBottomWidth: 8,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#D1D5DB',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginRight: 25,
              marginLeft: 25,
            }}>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              Change Password
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#D1D5DB',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginRight: 25,
              marginLeft: 25,
            }}>
            <Text style={{fontFamily: 'Nuniro-Regular', fontSize: 16}}>
              Support
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'Nuniro-Regular',
          fontSize: 16,
          color: '#FE0303',
          marginTop: 21,
          marginRight: 25,
          marginLeft: 25,
        }}>
        Sign Out
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    fontWeight: '600',
    margin: 4,
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
});
