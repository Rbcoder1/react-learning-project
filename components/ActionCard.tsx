import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India. It was
            commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://youtube.com')}>
            <Text style={styles.socialLink}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    height: 380,
    width: 350,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8
  },
  elevetedCard: {
    backgroundColor: '#bdd9c7',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#95baa2',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLink: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#568c69',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
});
