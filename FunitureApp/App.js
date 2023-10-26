import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import RootNavigatior from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigatior />
      </NavigationContainer>
    </Provider>

  )
}

export default App;
