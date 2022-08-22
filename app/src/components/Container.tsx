import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        {children}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Container;
