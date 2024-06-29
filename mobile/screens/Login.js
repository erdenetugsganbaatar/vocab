import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   webClientId:
//     "946696955351-sh5saamj9qr078ac3a57vqc5o2m48sr4.apps.googleusercontent.com", // From Google Developer Console
//   offlineAccess: true,
//   redirectUri: "http://localhost:8080/auth/google_callback",
// });

export default function Login() {
  //   useEffect(() => {
  //     GoogleSignin.signInSilently()
  //       .then((user) => {
  //         console.log(user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {/* <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInButton: {
    width: 192,
    height: 48,
  },
});
