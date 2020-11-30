import { CardStyleInterpolators } from '@react-navigation/stack';
import WelcomeScreen from './Welcome';
import SigninScreen from './Signin';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import MainScreen from './Main/Main';

module.exports = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signin',
    component: SigninScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'Main',
    component: MainScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: {
      headerShown: false,
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    },
  },
];
