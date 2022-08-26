import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import EditButton from "../components/EditButton";
import Layout from "../components/Layout";
import User from "../components/User";
import { useReadOrderQuery, useReadUserQuery } from "../generated/graphql";
import Loading from "./loading";

interface Props {
  route: {
    params: {
      id: number;
      uuid: string;
    };
  };
  navigation: {
    navigate: (
      route: string,
      params?: {
        uuid: string;
      }
    ) => void;
    goBack: () => void;
  };
}

const Order: React.FC<Props> = ({ navigation, route }) => {
  const { id, uuid } = route.params;
  const [{ data: readUserData, fetching: readUserFetching }] = useReadUserQuery(
    { variables: { uuid } }
  );
  const [{ data: readOrderData, fetching: readOrderFetching }] =
    useReadOrderQuery({ variables: { id } });

  console.log(id);
  console.log(readOrderData);

  if (readUserFetching || readOrderFetching) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton navigation={navigation} />
        <EditButton navigation={navigation} />
      </View>
      <Text style={styles.header}>Order #{readOrderData?.readOrder.id}</Text>
      <View style={{ marginTop: 15 }}>
        <User
          firstName={
            readUserData?.readUser.user.profession === "Radiologist"
              ? readOrderData?.readOrder.orderingPhysician.firstName!
              : readOrderData?.readOrder.radiologist.firstName!
          }
          lastName={
            readUserData?.readUser.user.profession === "Radiologist"
              ? readOrderData?.readOrder.orderingPhysician.lastName!
              : readOrderData?.readOrder.radiologist.lastName!
          }
          profession={
            readUserData?.readUser.user.profession === "Radiologist"
              ? readOrderData?.readOrder.orderingPhysician.profession!
              : readOrderData?.readOrder.radiologist.profession!
          }
          onPress={() => {
            if (readUserData?.readUser.user.profession === "Radiologist") {
              navigation.navigate("Profile", {
                uuid: readOrderData?.readOrder.orderingPhysicianUuid!,
              });
            } else {
              navigation.navigate("Profile", {
                uuid: readOrderData?.readOrder.radiologistUuid!,
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
          <Text style={styles.bluetext}>{readOrderData?.readOrder.mrn}</Text>
          <Text style={styles.bluetext}>{readOrderData?.readOrder.date}</Text>
          <Text style={styles.bluetext}>
            {readOrderData?.readOrder.priority}
          </Text>
          <Text style={styles.bluetext}>{readOrderData?.readOrder.status}</Text>
        </View>
      </View>
      <Text style={styles.messageheader}>Message</Text>
      <Text style={styles.text}>{readOrderData?.readOrder.message}</Text>
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
