import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Profile from "./Tabs/Profile";
import Statistics from "./Tabs/Statistics";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ColorSchemeStore } from "nativewind/dist/style-sheet/color-scheme";

/* Main Screen */
export default function MainPage({navigation}: any) {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 15,
            color: 'black'
          },
        }}>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => <FontAwesome id="profile-image" name={focused ? "user" : "user-o"} size={24} color="black"/>,
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            tabBarIcon: ({ focused }) => <MaterialIcons name={focused ? "insert-chart" : "insert-chart-outlined"} size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
