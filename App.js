
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigator from './src/AppNavigator';
import { AppContextProvider } from './src/AppContext';
import AgileLogin from './src/AgileLogin';






const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer >
        <AppNavigator/>
      </NavigationContainer>
    </AppContextProvider>
    
  );
};



export default App;

