/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ElevetedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevetedCards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.elevetedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevetedCard]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevetedCard]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevetedCard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevetedCard]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.elevetedCard]}>
            <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    container: {
      padding: 8,
    },
    card: {
      width: 100,
      height: 100,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      margin: 4,
    },
    elevetedCard: {
      backgroundColor: '#CAD5E2',
      elevation: 4,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: 'red',
      shadowOpacity: 0.9,
      shadowRadius: 4
    }
});
