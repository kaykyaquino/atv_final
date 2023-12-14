import {StyleSheet} from 'react-native';

import MyDrawer from './MyDrawer'

export default function DrawerMenu() {
  return (
    <MyDrawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
