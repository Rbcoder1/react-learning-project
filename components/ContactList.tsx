import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function ContactList() {
  const contact = [
    {
      name: 'rohit borse',
      number: 9527081664,
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    {
      name: 'paresh rajput',
      number: 1236547895,
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contact.map(({name, number, image}, index) => (
          <View key={index} style={styles.userCard}>
            <Image source={{uri: image}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userNumber}>{number}</Text>
            </View>
          </View>
        ))}
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
    padding: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000001',
    marginBottom: 3,
    padding: 4,
    borderRadius: 7
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  userNumber: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF'
  },
});
