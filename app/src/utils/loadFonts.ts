import { LogBox } from "react-native";
import { useFonts } from "expo-font";

LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

export const loadFonts = () => {
  return useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
};
