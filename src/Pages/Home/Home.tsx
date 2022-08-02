import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {getArticlesFromApi} from '../../services/apiServices';
import ListItem from '../../components/ListItem';

export default function Home({navigation}) {
  const [results, setResult] = useState([]);
  useEffect(() => {
    getArticlesFromApi().then(result => {
      setResult(result);
    });
  }, []);

  const renderItem = ({item}) => (
    <ListItem item={item} navigation={navigation}></ListItem>
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    height: '4%',
  },
});
