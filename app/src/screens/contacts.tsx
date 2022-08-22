import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Search from "../components/Search";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Contacts: React.FC<Props> = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: "Bob Dylan",
      profession: "Ordering Physician",
      organization: "Kaiser Permanente",
    },
    {
      id: 2,
      name: "Paul McCartney",
      profession: "Ordering Physician",
      organization: "Kaiser Permanente",
    },
    {
      id: 3,
      name: "Brian Wilson",
      profession: "Ordering Physician",
      organization: "Kaiser Permanente",
    },
  ];

  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <BackButton navigation={navigation} />
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <AntDesign name="plus" size={20} style={{ marginTop: 36 }} />
        </TouchableOpacity>
      </View>
      <Search />
      <FlatList
        style={{ marginTop: 12 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <Contact
            navigation={navigation}
            id={item.id}
            name={item.name}
            profession={item.profession}
            organization={item.organization}
          />
        )}
      />
    </Layout>
  );
};

export default Contacts;
