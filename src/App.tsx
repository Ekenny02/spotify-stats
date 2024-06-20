import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import setSecrets from "../Secrets";
import LoginPage from "./screens/LoginPage";
import MainPage from "./screens/MainPage";
import {Provider} from "react-redux";
import { store } from "./state/store";

const Stack = createNativeStackNavigator();

/* App Main */
export default function App() {
  setSecrets();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen
          name="Login Page"
          component={LoginPage}
        /> */}
          <Stack.Screen
            name="Main Page"
            component={MainPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
