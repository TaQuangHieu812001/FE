import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { ScreenName } from "../ScreenName";
import HomeScreen from "../../screens/home";
import FavoriteScreen from "../../screens/Favorite";
import MyCartScreen from "../../screens/Cart";
import SettingScreen from "../../screens/Settings";
import { Image, TouchableOpacity, View, Text, } from "react-native";
import icon from "../../utils/icon";
import styles from "./styles";
import CustomBottomTab from "../../components/customBottom";



const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
    const [checkBottomTab, setCheckBottomTab] = useState()

    const handleCheckBottomTab = () => {
        setCheckBottomTab(!checkBottomTab)
    }
    return (
        <Tab.Navigator
            initialRouteName={ScreenName.HOME_SCREEN}
            screenOptions={{
                headerShown: false,
                
            }}
            tabBar={(prop) => <CustomBottomTab navigation={navigation}/>}
        >
            <Tab.Screen
                name={ScreenName.HOME_SCREEN}
                component={HomeScreen}

            />
            <Tab.Screen
                name={ScreenName.FAVORITE_SCREEN}
                component={FavoriteScreen}

            />
            <Tab.Screen
                name={ScreenName.CART_sCREEN}
                component={MyCartScreen}

            />
            <Tab.Screen
                name={ScreenName.SETTING_SCREEN}
                component={SettingScreen}
            
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;