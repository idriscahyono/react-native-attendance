import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ActivityList = props => {
  const {icon, category, date, time} = props;
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <View style={styles.containerIcon}>{icon}</View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 18}}>
          {category}
        </Text>
        <Text style={{fontFamily: 'Nunito-Regular', fontSize: 14}}>{date}</Text>
      </View>
      <View>
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 16}}>{time}</Text>
      </View>
    </View>
  );
};

export default ActivityList;

const styles = StyleSheet.create({
  containerIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#003F5A',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
});
