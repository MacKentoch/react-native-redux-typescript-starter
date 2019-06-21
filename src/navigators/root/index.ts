import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import App from '../app';
import InfoScene from '../infoScene';

// #region constants
const routeConfigMap = {
  App: {
    screen: App,
  },
  InfoScene: {
    screen: InfoScene,
  },
};

const stackConfig: StackNavigatorConfig = {
  initialRouteName: 'App',
  headerMode: 'none',
};
// #endregion

const RootNavigator = createStackNavigator(routeConfigMap, stackConfig);

export default RootNavigator;
