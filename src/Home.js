import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import pokemon from './pokemonStore';

const Home = props => {
  const handlePress = pokemon => {
    props.selectPokemon(pokemon);
    props.history.push('pokemon');
  };
  return (
    <View>
      <Text style={{fontSize: 25}}>Your Pokemon:</Text>
      <FlatList
        style={{fontSize: 18}}
        data={pokemon}
        keyExtractor={pokemon => pokemon.number}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
