import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { useReadNotificationsQuery } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  navigation: {
    goBack: () => void;
    navigate: (
      route: string,
      params: {
        id: number;
      }
    ) => void;
  };
}

const Notifications: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadNotificationsQuery({
    variables: {
      id: user.id,
    },
  });

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <BackButton navigation={navigation} />
      </View>
      <View>
        <FlatList
          data={data?.readNotifications}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Order", { id: item.orderId })}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: (Dimensions.get("window").width * 30) / 428,
              }}
            >
              <Ionicons
                name="person"
                size={(Dimensions.get("window").width * 40) / 428}
                color={colors.blue_400}
              />
              <View
                style={{
                  marginLeft: (Dimensions.get("window").width * 11) / 428,
                  flexShrink: 1,
                }}
              >
                <Text style={styles.title}>{item.message}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: (Dimensions.get("window").width * 16) / 428,
    flexShrink: 1,
    fontFamily: "Poppins-Medium",
    color: "#133C55",
  },
  date: {
    fontSize: (Dimensions.get("window").width * 12) / 428,
    fontFamily: "Poppins-Regular",
    color: "#386FA4",
  },
});

export default Notifications;
