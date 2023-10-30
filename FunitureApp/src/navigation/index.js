import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "./ScreenName";
import AuthNavigation from "./AuthNavigation";
import CategoriesScreen from "../screens/Categories";
import BottomTabNavigator from "./BottomTab/BottomTabNavigator";
import { useSelector } from 'react-redux';
import FillterScreen from "../screens/FilterScreen";
import ProductFilter from "../screens/Product/ProductFilter";
import ProductDetail from "../screens/Product/ProductDetail";
import ProductCateFilter from '../screens/Product/ProductCateFilter';
import MyCartScreen from "../screens/Cart";
import ShippingAddress from '../screens/ShippingAdress'
import ShippingEdit from '../screens/ShippingAdress/ShippingEdit'
import Checkout from '../screens/Checkout/Checkout'
import CheckoutSuccess from '../screens/Checkout/OrderSuccess'
import MyOrder from '../screens/MyOrders'
import MyOrderDetail from '../screens/MyOrders/MyOrderDetail'
const Stack = createNativeStackNavigator();

const RootNavigatior = () => {
    let userState = useSelector(state => state.LoginReducer);
    if (userState.dataUser != null) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={ScreenName.BOTTOM_TAB_NAVIGATOR}
                    component={BottomTabNavigator}
                />
                <Stack.Screen
                    name={ScreenName.CATEGORIES_SCREEN}
                    component={CategoriesScreen}
                />
                <Stack.Screen
                    name={ScreenName.ProductCateFilter_SCREEN}
                    component={ProductCateFilter}
                />
                <Stack.Screen
                    name={ScreenName.FillterScreen}
                    component={FillterScreen}
                />
                <Stack.Screen
                    name={ScreenName.ProductFilterScreen}
                    component={ProductFilter}
                />
                <Stack.Screen
                    name={ScreenName.ProductDetail}
                    component={ProductDetail}
                />
                <Stack.Screen
                    name={ScreenName.MyCartAtHome}
                    component={MyCartScreen}
                />
                <Stack.Screen
                    name={ScreenName.SHIPPINGADDRESS_SCREEN}
                    component={ShippingAddress}
                />
                <Stack.Screen
                    name={ScreenName.ShippingEdit}
                    component={ShippingEdit}
                />
                <Stack.Screen
                    name={ScreenName.Checkout}
                    component={Checkout}
                />
                <Stack.Screen
                    name={ScreenName.CheckoutSuccess}
                    component={CheckoutSuccess}
                />
                <Stack.Screen
                    name={ScreenName.MYORDER_SCREEN}
                    component={MyOrder}
                />
                <Stack.Screen
                    name={ScreenName.MyOrderDetail}
                    component={MyOrderDetail}
                />
            </Stack.Navigator>
        )
    }
    else
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={ScreenName.AUTH_STACK}
                    component={AuthNavigation}
                />
            </Stack.Navigator>
        )

};
export default RootNavigatior;