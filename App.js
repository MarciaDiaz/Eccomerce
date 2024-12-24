import { StatusBar, Platform, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/globals/fonts";
import { temp } from "./src/globals/temp";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Navigator />
      <StatusBar backgroundColor={temp.accent} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.curr : 0,
  },
});
