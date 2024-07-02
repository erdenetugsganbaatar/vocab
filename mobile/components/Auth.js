import {
  GoogleOneTapSignIn,
  statusCodes,
  isErrorWithCode,
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

export default function () {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "946696955351-sh5saamj9qr078ac3a57vqc5o2m48sr4.apps.googleusercontent.com",
    androidClientId:
      "946696955351-7v61tuiak51bb59mtq93f9ovfv7cf9an.apps.googleusercontent.com",
  });

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        try {
          const user = await GoogleSignin.hasPlayServices();
          console.log("user", JSON.stringify(user, null, 2));
          const userInfo = await GoogleSignin.signIn();
          console.log(JSON.stringify(userInfo, null, 2));
        } catch (error) {
          if (isErrorWithCode(error)) {
            console.log("error 1", error, error.code);
            switch (error.code) {
              case statusCodes.SIGN_IN_CANCELLED:
                // user cancelled the login flow
                break;
              case statusCodes.IN_PROGRESS:
                // operation (eg. sign in) already in progress
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                // play services not available or outdated
                break;
              default:
              // some other error happened
            }
          } else {
            console.log("error 2");
            // an error that's not related to google sign in occurred
          }
        }
      }}
      //   disabled={isInProgress}
    />
  );
}
