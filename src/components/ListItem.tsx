import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Circle from './Circle';

function ListItem({item, navigation}) {
  const option2 = () => {
    navigation.navigate('Browser', {url: 'https://egghead.io'});
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <View style={styles.container}>
        <View style={styles.firstSection}>
          <Circle size={36} />
        </View>
        <View style={styles.middleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.authorArea}>
              <View style={{flex: 3}}>
                <Text style={styles.authorText}>{item.byline}</Text>
              </View>
              <View style={styles.blankSpace}></View>
              <View style={styles.date}>
                {/* <Icons iconName={"alarm-note-off"} size={17} color="gray"/> */}
                <Image
                  style={{width: 15, height: 15}}
                  source={require('../assets/icons/calendar.png')}
                />
                <View style={{}}>
                  <Text style={styles.dateText}>{item.published_date}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rightIcon}>
          <Text>
            <Image
              style={{width: 15, height: 15}}
              source={require('../assets/icons/next.png')}
            />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E9E4F4',
    borderRadius: 6,
    shadowColor: '#C70039',
    shadowOffset: {width: -2, height: 3},
    //shadowOpacity: 0.4,
    shadowRadius: 10,
    margin: 10,
    flexDirection: 'row',
    //shadowOffset: { width: 2, height: 6 },
    //shadowOpacity: 0.2,
    elevation: 15,
  },
  rightIcon: {
    flex: 0.3,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    //justifyContent:"center"
  },
  firstSection: {
    flex: 0.5,
    marginRight: 10,
  },
  middleSection: {
    flex: 3,
    //flexDirection: "row",
  },
  roundShape: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  authorArea: {
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {fontWeight: '600'},
  authorText: {paddingTop: 10, color: 'gray'},
  date: {
    flex: 2,
    flexDirection: 'row',
    paddingTop: 10,
    //alignItems:"flex-start"
    justifyContent: 'flex-end',
    //paddingLeft:10
  },
  dateText: {color: 'gray', marginLeft: 5, flex: 2},
  blankSpace: {flex: 0.5},
});
