import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <StatusBar />
          <Text preset="headingLarge" bold>
            Olá!
          </Text>

          <Button title="Entrar" mb="s32" />

          <Button title="Entrar" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
