import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Profile from "./Tabs/Profile";
import TopArtists from "./Tabs/TopArtists";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export default function Main({navigation}: any) {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 15,
          },
        }}>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />
          }}
        />
        <Tab.Screen
          name="Top Artists"
          component={TopArtists}
          options={{
            tabBarIcon: () => <Entypo name="bar-graph" size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
