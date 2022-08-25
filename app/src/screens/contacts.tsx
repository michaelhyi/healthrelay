import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Search from "../components/Search";
import { useReadContactsQuery } from "../generated/graphql";
import Loading from "./loading";

interface Props {
  route: {
    params: {
      uuid: string;
      contact?: boolean;
    };
  };
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Contacts: React.FC<Props> = ({ route, navigation }) => {
  const { uuid, contact } = route.params;
  const [{ data, fetching }] = useReadContactsQuery({ variables: { uuid } });

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
        renderItem={({ item }) => (
          <Contact
            contact={contact}
            uuid={item.secondaryUuid}
            navigation={navigation}
            id={item.id}
            name={item.firstName + " " + item.lastName}
            profession={item.profession}
            organization={item.organization}
          />
        )}
      />
    </Layout>
  );
};

export default Contacts;
