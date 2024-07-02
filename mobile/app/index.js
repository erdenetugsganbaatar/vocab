import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "../screens/Login";
import MainScreen from "../screens/MainScreen";

export default function App() {
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
      {Login ? <LoginScreen /> : <MainScreen />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
