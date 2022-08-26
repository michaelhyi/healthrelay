import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import EditButton from "../components/EditButton";
import Layout from "../components/Layout";
import User from "../components/User";
import { useReadOrderQuery } from "../generated/graphql";
import Context from "../utils/context";
import Loading from "./loading";

interface Props {
  route: {
    params: {
      id: number;
    };
  };
  navigation: {
    navigate: (
      route: string,
      params?: {
        id: number;
      }
    ) => void;
    goBack: () => void;
  };
}

const Order: React.FC<Props> = ({ navigation, route }) => {
  const { user } = useContext(Context);
  const { id } = route.params;
  const [{ data, fetching }] = useReadOrderQuery({ variables: { id } });

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton navigation={navigation} />
        <EditButton navigation={navigation} />
      </View>
      <Text style={styles.header}>Order #{data?.readOrder.order.id}</Text>
      <View style={{ marginTop: 15 }}>
        <User
          firstName={
            user.profession === "Radiologist"
              ? data?.readOrder.orderingPhysician.firstName!
              : data?.readOrder.radiologist.firstName!
          }
          lastName={
            user.profession === "Radiologist"
              ? data?.readOrder.orderingPhysician.lastName!
              : data?.readOrder.radiologist.lastName!
          }
          profession={
            user.profession === "Radiologist"
              ? data?.readOrder.orderingPhysician.profession!
              : data?.readOrder.radiologist.profession!
          }
          onPress={() => {
            if (user.profession === "Radiologist") {
              navigation.navigate("Profile", {
                id: data?.readOrder.order.orderingPhysicianId!,
              });
            } else {
              navigation.navigate("Profile", {
                id: data?.readOrder.order.radiologistId!,
              });
            }
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <View>
          <Text style={styles.text}>MRN</Text>
          <Text style={styles.text}>Date</Text>
          <Text style={styles.text}>Priority</Text>
          <Text style={styles.text}>Status</Text>
        </View>
        <View>
          <Text style={styles.bluetext}>{data?.readOrder.order.mrn}</Text>
          <Text style={styles.bluetext}>{data?.readOrder.order.date}</Text>
          <Text style={styles.bluetext}>{data?.readOrder.order.priority}</Text>
          <Text style={styles.bluetext}>{data?.readOrder.order.status}</Text>
        </View>
      </View>
      <Text style={styles.messageheader}>Message</Text>
      <Text style={styles.text}>{data?.readOrder.order.message}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#386FA4",
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#386FA4",
  },
  position: {
    fontSize: 14,
    fontFamily: "Poppins-Semibold",
    color: "#59A5D8",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#999999",
    marginBottom: 4,
  },
  bluetext: {
    textAlign: "right",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#386FA4",
    marginBottom: 4,
  },
  messageheader: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "#386FA4",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Order;
