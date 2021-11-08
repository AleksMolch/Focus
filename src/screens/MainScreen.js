import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.center}>
      <Text>MainScreen!</Text>
      <Button title="О приложении" onPress={goToAbout} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
