import { StyleSheet } from "react-native"; // Elimina NavigationContainer aquí
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import ProductsByCategory from "../screens/ProductsByCategory";
import Header from "../components/Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "Categorias"
                    : route.name === "ProductByCategory"
                    ? route.params.category
                    : route.params.product.brand
                }
                routeName={route.name}
              />
            );
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductByCategory" component={ProductsByCategory} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
