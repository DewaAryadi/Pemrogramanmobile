import LoginScreen from './Login';
import SignupScreen from './Signup';

import FormScreen from './Form';
import TabScreen from './Menu/Tab';

module.exports = [

  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'Tab',
    component: TabScreen,
    options: { headerShown: false },
  },
  {
    name: 'Form',
    component: FormScreen,
    options: { headerShown: false },
  }
  
  

];
