import { CheckIcon } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import EditButton from "../components/EditButton";
import Layout from "../components/Layout";
import User from "../components/User";
import {
  useReadOrderMutation,
  useUpdateOrderStatusMutation,
} from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
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
        id?: number;
        data?: any;
      }
    ) => void;
    goBack: () => void;
  };
}

const Order: React.FC<Props> = ({ navigation, route }) => {
  const { user } = useContext(Context);
  const { id } = route.params;
  const [, readOrder] = useReadOrderMutation();
  const [, updateOrderStatus] = useUpdateOrderStatusMutation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      let response = await readOrder({ id });
      if (
        response.data?.readOrder.status === "Pending" &&
        user.profession === "Ordering Physician" &&
        user.id === response.data.readOrder.orderingPhysicianId
      ) {
        await updateOrderStatus({ id, status: "Opened" });
        response = await readOrder({ id });
      }
      setData(response.data?.readOrder);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton navigation={navigation} />
        {user.id === data.radiologist.id && (
          <EditButton
            onPress={() => {
              navigation.navigate("Edit Order", { data });
            }}
          />
        )}
      </View>
      <Text style={styles.header}>Order #{data?.id}</Text>
      <View style={{ marginTop: 15 }}>
        <User
          firstName={
            user.profession === "Radiologist"
              ? data.orderingPhysician.firstName!
              : data.radiologist.firstName!
          }
          lastName={
            user.profession === "Radiologist"
              ? data?.orderingPhysician.lastName!
              : data?.radiologist.lastName!
          }
          profession={
            user.profession === "Radiologist"
              ? data.orderingPhysician.profession!
              : data?.radiologist.profession!
          }
          onPress={() => {
            if (user.profession === "Radiologist") {
              navigation.navigate("Profile", {
                id: data?.orderingPhysicianId!,
              });
            } else {
              navigation.navigate("Profile", {
                id: data?.radiologistId!,
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
          <Text style={styles.bluetext}>{data?.mrn}</Text>
          <Text style={styles.bluetext}>{data?.date}</Text>
          <Text style={styles.bluetext}>{data?.priority}</Text>
          <Text style={styles.bluetext}>{data?.status}</Text>
        </View>
      </View>
      <Text style={styles.messageheader}>Message</Text>
      <Text style={styles.text}>{data?.message}</Text>
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 48,
        }}
      >
        {user.profession === "Radiologist" && (
          <TouchableOpacity
            style={{
              backgroundColor: colors.blue_400,
              padding: 12,
              width: Dimensions.get("window").width - 48,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                color: "white",
                textAlign: "center",
              }}
            >
              Send Reminder
            </Text>
          </TouchableOpacity>
        )}
        {user.profession === "Ordering Physician" && (
          <TouchableOpacity
            onPress={() => {
              if (data.status !== "Completed") {
                Alert.alert("Mark As Complete?", "", [
                  {
                    text: "Yes",
                    onPress: async () => {
                      setLoading(true);
                      setData({ ...data, status: "Completed" });
                      await updateOrderStatus({ id, status: "Completed" });
                      Alert.alert(
                        "Success!",
                        "Order has been marked as completed."
                      );
                      setLoading(false);
                    },
                  },
                  { text: "No", style: "cancel" },
                ]);
              }
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                data.status !== "Completed" ? colors.blue_400 : "green",
              padding: 12,
              width: Dimensions.get("window").width - 48,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                color: "white",
                textAlign: "center",
                marginRight: data.status === "Completed" ? 6 : 0,
              }}
            >
              Mark As Complete
            </Text>
            {data.status === "Completed" && <CheckIcon color="white" />}
          </TouchableOpacity>
        )}
      </View>
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
