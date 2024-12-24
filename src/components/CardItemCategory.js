import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShadowCards from "./wrappers/ShadowCards";
import { useNavigation } from "@react-navigation/native";

const CardItemCategory = ({ item: category }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("ProductByCategory", { category })}
    >
      <ShadowCards style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </ShadowCards>
    </Pressable>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "grey",
  },
});
