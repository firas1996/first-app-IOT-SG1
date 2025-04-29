import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Fav from "./src/screens/Fav";
import Register from "./src/screens/Register";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="Fav" component={Fav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
