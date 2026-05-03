// screens/MoviesScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';

export default function MoviesScreen() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const data = await response.json();
      setMovies(data.movies);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies');
      setLoading(false);
    }
  };

  const renderMovie = ({ item, index }) => (
    <View style={[globalStyles.card, { flexDirection: 'row' }]}>
      <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: colors.primaryLight, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
        <Text style={{ fontSize: 20, color: colors.surface }}>{index + 1}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[globalStyles.textLarge, { marginBottom: 5 }]}>
          {item.title}
        </Text>
        <Text style={globalStyles.textSmall}>
           Release Year: {item.releaseYear}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={globalStyles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[globalStyles.text, { marginTop: 20, color: colors.textLight }]}>
          Loading movies...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
       
        <Text style={globalStyles.headerSubtitle}>
          {movies.length} movies available
        </Text>
      </View>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}