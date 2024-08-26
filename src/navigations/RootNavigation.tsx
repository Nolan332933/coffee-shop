import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTabNavigation";
import {
  BOTTOM_TAB,
  DETAILS_SCREEN,
  PAYMENT_SCREEN,
} from "../constants/Routes";
import { DetailsScreen, PaymentScreen } from "../screens";
import { ParamsList } from "../models/ScreenParamsList.models";

const Stack = createNativeStackNavigator<ParamsList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={BOTTOM_TAB}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={BOTTOM_TAB}
          component={BottomTab}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name={DETAILS_SCREEN}
          component={DetailsScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name={PAYMENT_SCREEN}
          component={PaymentScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
