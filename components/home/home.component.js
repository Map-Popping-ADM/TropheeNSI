import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Card, Button, Divider, Layout, TopNavigation, Text, useTheme } from '@ui-kitten/components';
import Liste from './liste.js';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Nom' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Card style={styles.card} onPress={navigateDetails}>
          <Text category="h2">
            Carte
          </Text>
        </Card>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 15,
    backgroundImage: "url(" + "https://www.trailermatics.fr/wp-content/uploads/2020/10/earth.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "90%",
    height: "20%"
  }
});