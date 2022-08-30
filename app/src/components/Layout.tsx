import Constants from "expo-constants";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
}

const Layout: React.FC<Props> = ({ children, noPadding }) => {
  return (
    <View
      style={
        noPadding ? { flex: 1, backgroundColor: "#F9F9F9" } : styles.container
      }
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: (Dimensions.get("window").width * 24) / 428,
  },
});

export default Layout;
