import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);
  return (
    <FlatList
      data={places}
      renderItem={itemData => (
        <PlaceItem
          image={''}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              id: itemData.item.id,
              placeTitle: itemData.item.title
            });
          }}
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PlacesListScreen;
