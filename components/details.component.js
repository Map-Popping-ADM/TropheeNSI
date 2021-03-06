import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { MenuItem, OverflowMenu } from '@ui-kitten/components';

// icons
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const EditIcon = (props) => (
  <Icon {...props} name='edit'/>
);
const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical'/>
);
const Parametre = (props) => (
  <Icon {...props} name='settings-2-outline'/>
);
const Info = (props) => (
  <Icon {...props} name='info-outline'/>
);

export const DetailsScreen = ({ navigation }) => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  );

  const navigateParametres = () => (
    // TODO naviguer vers la page parametre
    navigation.navigate('Home') 
  );
  // TODO navigation vers la page info

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={Parametre} title='Paramètres' onPress={navigateParametres}/>
        <MenuItem accessoryLeft={Info} title='Infos' onPress={navigateParametres}/>
      </OverflowMenu>
    </React.Fragment>
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} accessoryRight={renderRightActions}/>
      <Divider/>
      {/* ce layout est la balise contenant le contenu "main" de la page */}
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};