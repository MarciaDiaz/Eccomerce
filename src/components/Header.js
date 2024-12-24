import { StyleSheet, Text, View } from "react-native";
import { temp } from "../globals/temp";
import AtrasBack from "./AtrasBack";

const Header = ({ title, routeName }) => {
  return (
    <View style={styles.container}>
      {routeName != "Home" ? <AtrasBack /> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: temp.fondo,
    // marginTop: 30,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    position: "relative",
  },
  title: {
    color: temp.primary,
    fontSize: 16,
    fontFamily: "josefin",
  },
});
