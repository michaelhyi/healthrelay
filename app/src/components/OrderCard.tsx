import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/styles";
import Row from "./Row";

interface Props {
  navigation: {
    navigate: (
      route: string,
      params: {
        id: number;
      }
    ) => void;
  };
  id: number;
  date: string;
  priority: number;
  status: number;
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
      onPress={() => navigation.navigate("Order", { id })}
      style={
        full
          ? { ...styles.container, width: "100%", marginTop: 18 }
          : { ...styles.container, width: 256 }
      }
    >
      <Text style={styles.id}>Order #{id}</Text>
      <Row name="Date" text={date} />
      <Row
        name="Priority"
        text={priority === 0 ? "Low" : priority === 1 ? "Medium" : "High"}
      />
      <Row
        name="Status"
        text={status === 0 ? "Pending" : status === 1 ? "Opened" : "Completed"}
      />
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
