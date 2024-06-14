/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardEleveted]}>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India. It was
            commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to
          </Text>
          <Text style={styles.cardFooter}>
            Address: Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh
            282001
          </Text>
        </View>
      </View>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 7,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardEleveted: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6
  },
  cardDescription: {
    color: '#000000',
    fontSize: 12,
  },
  cardFooter: {
    color: '#000000',
    marginTop: 8,
    fontSize: 12
  },
});
