import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevetedCards from './components/ElevetedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
        <ElevetedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
