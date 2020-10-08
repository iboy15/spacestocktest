import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Home from "../Containers/Home";
import DetailApartmen from "../Containers/DetailApartmen";
import DetailUnit from "../Containers/DetailUnit";
import SearchResult from "../Containers/SearchResult";

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="DetailApartmen" component={DetailApartmen} />
        <Stack.Screen name="DetailUnit" component={DetailUnit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
