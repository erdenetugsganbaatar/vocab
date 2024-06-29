import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Menu(params) {
  return (
    <View style={styles.outerContainer}>
      <Text>MainScreen Menu</Text>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "flex-end", // Aligns the content to the bottom
    alignItems: "center",
    marginBottom: 20, // Optional: Add some margin at the bottom
  },
});
