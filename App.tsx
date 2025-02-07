import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text preset="headingLarge" bold>
        Olá!
      </Text>
    </SafeAreaView>
  );
}
