import {StyleSheet, View} from 'react-native';
import RootNavigation from './src/navigations/RootNavigation';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <RootNavigation />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});
