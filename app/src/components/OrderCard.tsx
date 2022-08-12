import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/styles";
import Row from "./Row";

interface Props {
  id: number;
  date: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Opened" | "Complete";
}

const OrderCard: React.FC<Props> = ({ id, date, priority, status }) => {
  return (
    <TouchableOpacity style={styles.container}>
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
    width: 256,
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
