import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Provider } from "urql";
import { client } from "../utils/urqlClient";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Provider value={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          {children}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default Container;
