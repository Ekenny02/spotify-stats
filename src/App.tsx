import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import setSecrets from "../Secrets";
import Main from "./screens/Main";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {

  setSecrets()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
          name="Login"
          component={Login}
        /> */}
        <Stack.Screen
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
