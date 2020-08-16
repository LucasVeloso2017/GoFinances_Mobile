import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import BottomTab from './Bottom.routes'

const { Navigator,Screen } = createStackNavigator()

const Routes: React.FC = () => {
    return(
        <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="landing" component={Landing}/> 
            <Screen name="tab" component={BottomTab}/>         
        </Navigator>    
    </NavigationContainer>
        
    );
}
export default Routes;