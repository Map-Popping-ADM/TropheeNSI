import React from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';

export default function App() {

  //pour obtenir la couleur du theme
  const theme = useTheme();
  
  return(
    <>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="orange"
        // Pour utiliser la couleur du bg : theme["background-basic-color-1"]
      />
      <IconRegistry icons={EvaIconsPack}/>
      {/* TODO créer un variable pour changer le thème */}
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  );
}