import { FlatList, View } from "react-native";
import SectionHeader from "./SectionHeader";
import React from "react";
import Contact from "./Contact";

interface Props {
  navigation: {
    navigate: (route: string) => void;
  };
}

const RecentContactsSection: React.FC<Props> = ({ navigation }) => {
  const fake_data = [
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

  const renderItem = ({ item }) => (
    <Contact
      navigation={navigation}
      id={item.id}
      name={item.name}
      profession={item.profession}
      organization={item.organization}
    />
  );

  return (
    <View style={{ marginTop: 24 }}>
      <SectionHeader navigation={navigation} text="Contacts" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={fake_data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecentContactsSection;
