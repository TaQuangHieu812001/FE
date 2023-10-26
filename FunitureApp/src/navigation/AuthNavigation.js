import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "./ScreenName";
import LoginScreen from "../screens/Login";
import LoginEmailScreen from "../screens/LoginEmail";
import HomeScreen from "../screens/home";
import CategoriesScreen from "../screens/Categories";
import ProfileScreen from "../screens/Profile";
import MyCartScreen from "../screens/Cart";
import RegisterScreen from "../screens/Register";

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={ScreenName.LOGIN_SCREEN}
                component={LoginScreen}
            />
            <Stack.Screen
                name={ScreenName.LOGIN_EMAIL_SCREEN}
                component={LoginEmailScreen}
            />
            <Stack.Screen
                name={ScreenName.REGISTER_SCREEN}
                component={RegisterScreen}
            />
           
            <Stack.Screen
                name={ScreenName.CATEGORIES_SCREEN}
                component={CategoriesScreen}
            />
            <Stack.Screen
                name={ScreenName.CART_sCREEN}
                component={MyCartScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigation