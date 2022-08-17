import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/styles";
import Row from "./Row";

interface Props {
  navigation: {
    navigate: (route: string) => void;
  };
  id: number;
  date: string;
  priority: "Low" | "Medium" | "High" | string;
  status: "Pending" | "Opened" | "Complete" | string;
  full?: boolean;
}

const OrderCard: React.FC<Props> = ({
  navigation,
  id,
  date,
  priority,
  status,
  full,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order")}
      style={
        full
          ? { ...styles.container, width: "100%", marginTop: 18 }
          : { ...styles.container, width: 256 }
      }
    >
      <Text style={styles.id}>Order #{id}</Text>
      <Row name="Date" text={date} />
      <Row name="Priority" text={priority} />
      <Row name="Status" text={status} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginRight: 24,
  },
  id: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: colors.blue_400,
    marginBottom: 36,
  },
});

export default OrderCard;
