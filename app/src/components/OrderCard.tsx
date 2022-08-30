import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
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
          ? {
              ...styles.container,
              width: "100%",
              marginTop: (Dimensions.get("window").width * 18) / 428,
            }
          : {
              ...styles.container,
              width: (Dimensions.get("window").width * 256) / 428,
            }
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
    borderRadius: (Dimensions.get("window").width * 12) / 428,
    padding: (Dimensions.get("window").width * 12) / 428,
    marginRight: (Dimensions.get("window").width * 24) / 428,
  },
  id: {
    fontFamily: "Poppins-Medium",
    fontSize: (Dimensions.get("window").width * 16) / 428,
    color: colors.blue_400,
    marginBottom: (Dimensions.get("window").width * 36) / 428,
  },
});

export default OrderCard;
