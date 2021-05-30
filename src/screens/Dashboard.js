import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import ImageProfile from '../assets/images/profile.jpg';
import CustomMenu from '../components/CustomMenu';
import ActivityList from '../components/ActivityList';
import {
  CheckInIcon,
  CheckOutIcon,
  AbsensiLogIcon,
  OvertimeInIcon,
  OvertimeOutIcon,
  MoreIcon,
} from '../assets/icons';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003F5A" barStyle="light-content" />
      <View style={styles.containerHeader}>
        <View style={{marginLeft: 36, marginRight: 36, marginTop: 40}}>
          <Text
            style={{
              fontFamily: 'Nunito-Regular',
              color: '#FFB951',
              fontSize: 16,
            }}>
            Wed, 30 May 2021
          </Text>
          <View style={{flexDirection: 'row', marginTop: 36}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Nunito-Regular',
                  color: '#FFFFFF',
                  fontSize: 16,
                }}>
                Hi, Welcome Back
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  color: '#FFFFFF',
                  fontSize: 20,
                  marginTop: 8,
                }}>
                Idris Cahyono
              </Text>
            </View>
            <Image
              source={ImageProfile}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerMenu}>
        <View style={styles.containerListMenu}>
          <CustomMenu
            nama="Check In"
            icon={<CheckInIcon width={35} height={35} />}
          />
          <CustomMenu
            nama="Check Out"
            icon={<CheckOutIcon width={35} height={35} />}
          />
          <CustomMenu
            nama="Absensi Log"
            icon={<AbsensiLogIcon width={35} height={35} />}
          />
        </View>
        <View
          style={{
            ...styles.containerListMenu,
            marginTop: 32,
          }}>
          <CustomMenu
            nama="Overtime In"
            icon={<OvertimeInIcon width={35} height={35} />}
          />
          <CustomMenu
            nama="Overtime Out"
            icon={<OvertimeOutIcon width={35} height={35} />}
          />
          <CustomMenu nama="More" icon={<MoreIcon width={35} height={35} />} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 36,
          marginRight: 36,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
            fontSize: 18,
          }}>
          Recent Activity
        </Text>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 14,
            color: '#FFB951',
          }}>
          View More
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            marginLeft: 36,
            marginRight: 36,
            marginTop: 10,
          }}>
          <ActivityList
            icon={<CheckInIcon width={35} height={35} />}
            category="Check In"
            date="Sunday, 30-06-2021"
            time="07:30"
          />
          <ActivityList
            icon={<CheckInIcon width={35} height={35} />}
            category="Check Out"
            date="Friday, 06-07-2021"
            time="08:00"
          />
          <ActivityList
            icon={<CheckInIcon width={35} height={35} />}
            category="Check In"
            date="Tuesday, 12-07-2021"
            time="07:45"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerHeader: {
    backgroundColor: '#003F5A',
    height: '30%',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  containerMenu: {
    height: '40%',
    borderBottomColor: '#D1D5DB',
    borderBottomWidth: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerListMenu: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
