import { AntDesign } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Search from "../components/Search";
import { useReadContactsQuery } from "../generated/graphql";
import Context from "../utils/context";
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
  const { user } = useContext(Context);
  const { id, contact } = route.params;
  const [{ data, fetching }] = useReadContactsQuery({ variables: { id } });

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<any>(null);

  useEffect(() => {
    if (!fetching && typeof data?.readContacts !== "undefined") {
      setFilteredData(data.readContacts);
    }
  }, [data, fetching]);

  const filter = (text: string) => {
    if (text.length === 0) {
      setSearch("");
      setFilteredData(data?.readContacts);
    } else if (text && data) {
      const newData = data.readContacts.filter((item: any) => {
        const itemData = item.orderingPhysician.firstName
          ? item.orderingPhysician.firstName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    }
  };

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <BackButton navigation={navigation} />
        {user.profession === "Radiologist" && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Create Contact")}
            style={{ marginLeft: "auto" }}
          >
            <AntDesign
              name="plus"
              size={(Dimensions.get("window").width * 20) / 428}
              style={{ marginTop: (Dimensions.get("window").width * 36) / 428 }}
            />
          </TouchableOpacity>
        )}
      </View>
      <Search value={search} onChangeText={(text) => filter(text)} />
      <FlatList
        style={{ marginTop: (Dimensions.get("window").width * 12) / 428 }}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={({ item }) => {
          return (
            <Contact
              contact={contact}
              id={item.orderingPhysicianId}
              navigation={navigation}
              firstName={item.orderingPhysician.firstName}
              lastName={item.orderingPhysician.lastName}
              profession={item.orderingPhysician.profession}
              organization={item.orderingPhysician.organization}
            />
          );
        }}
      />
    </Layout>
  );
};

export default Contacts;
