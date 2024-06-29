import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Menu from "../components/menu";

export default function Login() {
  const [Login, setLogin] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000); // 2 seconds

  //   // Cleanup the timer on unmount
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.outerContainer}>
      <Text>MainScreen</Text>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
