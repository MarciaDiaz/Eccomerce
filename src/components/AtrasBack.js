import { StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";
import { temp } from "../globals/temp";

const AtrasBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color={temp.primary} />
    </Pressable>
  );
};

export default AtrasBack;

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    left: 15,
  },
});
