import React from "react";
import { TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const Order: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} style={{ marginTop: 36 }} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Order;
