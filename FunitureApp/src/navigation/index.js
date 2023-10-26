import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "./ScreenName";
import AuthNavigation from "./AuthNavigation";

import BottomTabNavigator from "./BottomTab/BottomTabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigatior =()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name={ScreenName.AUTH_STACK}
                component={AuthNavigation}
            />
            <Stack.Screen
                name={ScreenName.BOTTOM_TAB_NAVIGATOR}
                component={BottomTabNavigator}
            />
        </Stack.Navigator>
    )

};
export default RootNavigatior;