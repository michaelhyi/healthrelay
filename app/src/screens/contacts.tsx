import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Search from "../components/Search";
import { useReadContactsQuery, useReadUserQuery } from "../generated/graphql";
import Loading from "./loading";

interface Props {
  route: {
    params: {
      id: number;
      contact?: boolean;
    };
  };
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Contacts: React.FC<Props> = ({ route, navigation }) => {
  const { id, contact } = route.params;
  const [{ data, fetching }] = useReadContactsQuery({ variables: { id } });

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <BackButton navigation={navigation} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Create Contact")}
          style={{ marginLeft: "auto" }}
        >
          <AntDesign name="plus" size={20} style={{ marginTop: 36 }} />
        </TouchableOpacity>
      </View>
      <Search />
      <FlatList
        style={{ marginTop: 12 }}
        showsVerticalScrollIndicator={false}
        data={data?.readContacts}
        renderItem={({ item }) => {
          const [{ data, fetching }] = useReadUserQuery({
            variables: { id: item.orderingPhysicianId },
          });

          if (fetching) return <ActivityIndicator />;

          return (
            <Contact
              contact={contact}
              id={data?.readUser.id!}
              navigation={navigation}
              firstName={data?.readUser.firstName!}
              lastName={data?.readUser.lastName!}
              profession={data?.readUser.profession!}
              organization={data?.readUser.organization!}
            />
          );
        }}
      />
    </Layout>
  );
};

export default Contacts;
